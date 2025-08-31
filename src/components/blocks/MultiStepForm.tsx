"use client";

import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import {
  UserIcon,
  EnvelopeIcon,
  ChevronRightIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
  PaintBrushIcon,
  SparklesIcon,
  CodeBracketIcon,
  BanknotesIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  CalendarDaysIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  LightBulbIcon,
  UserGroupIcon,
  ArrowPathIcon,
  LinkIcon,
  PaperClipIcon,
  CloudArrowUpIcon,
  XMarkIcon,
  TrashIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";

/* ---------------- Helpers ---------------- */
function cn(...cls: Array<string | false | null | undefined>) {
  return cls.filter(Boolean).join(" ");
}
function formatBytes(bytes: number) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

/* ---------------- Stepper ---------------- */
type Step = {
  key: string;
  label: string;
  ctaNext?: string;
  title: string;
  subtitle: string;
};

const STEPS: Step[] = [
  {
    key: "acquainted",
    label: "Let's Get Acquainted",
    ctaNext: "Define Your Vision",
    title: "Let's get acquainted.",
    subtitle: "So we know who's behind the next big thing.",
  },
  {
    key: "vision",
    label: "What Are We Imagining Together?",
    ctaNext: "Scope & Budget",
    title: "Define your vision.",
    subtitle: "Tell us what you're imagining so we can align with you.",
  },
  {
    key: "scope",
    label: "Scope & Budget Clarity",
    ctaNext: "Timeline & Urgency",
    title: "Every build starts with smart planning.",
    subtitle:
      "This helps us understand scope — you'll always get transparent pricing, no surprise bills.",
  },
  {
    key: "timeline",
    label: "Timeline & Urgency",
    ctaNext: "Vision Blueprint",
    title: "This is brilliant.",
    subtitle: "You're qualifying urgency without sounding needy.",
  },
  {
    key: "blueprint",
    label: "Vision Blueprint",
    ctaNext: "You're In — Let's Build",
    title: "Let's hear it straight from you.",
    subtitle: "",
  },
  {
    key: "build",
    label: "You're In — Let's Build",
    ctaNext: "Finish",
    title: "You're officially in the loop!",
    subtitle:
      "Your idea has reached our core team. Expect a tailored response within 12–24 hours.",
  },
];

function ScreenshotStepper({
  steps,
  current,
}: {
  steps: Step[];
  current: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dotRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [metrics, setMetrics] = useState<{
    left: number;
    width: number;
    top: number;
    centers: number[];
  }>({ left: 0, width: 0, top: 0, centers: [] });

  const trackH = 4;

  useLayoutEffect(() => {
    const calc = () => {
      if (!containerRef.current || dotRefs.current.length === 0) return;
      const cRect = containerRef.current.getBoundingClientRect();

      const centers: number[] = [];
      let topPx = 0;

      dotRefs.current.forEach((el, idx) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const cx = r.left - cRect.left + r.width / 2;
        centers[idx] = cx;
        if (idx === 0) {
          topPx = r.top - cRect.top + r.height / 2 - trackH / 2;
        }
      });

      if (centers.length === 0) return;

      const left = centers[0];
      const right = centers[centers.length - 1];
      const width = Math.max(0, right - left);

      setMetrics({ left, width, top: topPx, centers });
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [steps.length]);

  const progressWidth = Math.max(
    0,
    (metrics.centers[current] ?? metrics.left) - (metrics.centers[0] ?? metrics.left)
  );

  return (
    <div ref={containerRef} className="relative px-2 pt-6 md:px-6">
      {/* Base track */}
      <div
        className="absolute rounded-full bg-gray-200"
        style={{
          left: metrics.left,
          width: metrics.width,
          top: metrics.top,
          height: trackH,
        }}
        aria-hidden
      />
      {/* Progress line */}
      <div
        className="absolute rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[width]"
        style={{
          left: metrics.left,
          width: progressWidth,
          top: metrics.top,
          height: trackH,
        }}
        aria-hidden
      />

      {/* Dots + Labels */}
      <div
        className="relative z-10 grid"
        style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
      >
        {steps.map((s, i) => {
          const isActive = i === current;
          const isComplete = i < current;
          return (
            <div key={s.key} className="flex flex-col items-center">
              <button
                ref={(el) => {
                  dotRefs.current[i] = el;
                }}
                type="button"
                className="group relative -mt-1"
                aria-current={isActive ? "step" : undefined}
                aria-label={`Step ${i + 1}: ${s.label}`}
              >
                {isActive ? (
                  <span className="relative grid place-items-center rounded-full ring-[3px] sm:ring-[5px] ring-gray-100">
                    <span className="block h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-500 p-[2px] sm:p-[3px] shadow-[0_4px_12px_rgba(59,130,246,0.35)] sm:shadow-[0_8px_24px_rgba(59,130,246,0.35)]">
                      <span className="block h-full w-full rounded-full bg-white" />
                    </span>
                  </span>
                ) : isComplete ? (
                  <span className="grid h-7 w-7 sm:h-9 sm:w-9 place-items-center rounded-full ring-[3px] sm:ring-[5px] ring-gray-200 bg-gradient-to-br from-indigo-600 to-indigo-500 text-white shadow-[0_1px_0_rgba(0,0,0,0.03)]">
                    <CheckIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                ) : (
                  <span className="grid h-7 w-7 sm:h-9 sm:w-9 place-items-center rounded-full bg-gray-300 text-xs sm:text-[13px] font-bold text-white ring-[3px] sm:ring-[5px] ring-[#F0F0F0] shadow-[0_1px_0_rgba(0,0,0,0.03)]">
                    {i + 1}
                  </span>
                )}
              </button>

              {/* Label pill */}
              <div className="relative mt-2 sm:mt-3">
                <span
                  aria-hidden
                  className="absolute -top-[5px] sm:-top-[6px] left-1/2 -translate-x-1/2"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "5px solid transparent",
                    borderRight: "5px solid transparent",
                    borderBottom: "5px solid white",
                    filter: "drop-shadow(0 1px 1px rgba(2,6,23,0.06))",
                  }}
                />
                <span
                  className={cn(
                    "inline-block select-none rounded-full bg-white px-2 py-1.5 sm:px-[12px] sm:py-2 text-[8px] sm:text-[9px] font-semibold shadow-[0_4px_12px_rgba(2,6,23,0.10)] sm:shadow-[0_10px_24px_rgba(2,6,23,0.10)] ring-1 ring-gray-100 whitespace-nowrap max-w-[80px] sm:max-w-none overflow-hidden text-ellipsis",
                    isActive ? "text-indigo-700" : "text-slate-700"
                  )}
                  title={s.label}
                >
                  {s.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* -------------- Shared Inputs -------------- */

function InputWithIcon(props: {
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (v: string) => void;
  name?: string;
}) {
  const { type = "text", placeholder, icon, value, onChange, name } = props;
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="h-12 w-full rounded-[15px] border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 box-shadow: 0px 0px 40px -50px #412BE012;
 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
      />
    </div>
  );
}

type ChipOption = {
  value: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};

function OptionChip({
  option,
  selected,
  onToggle,
}: {
  option: ChipOption;
  selected: boolean;
  onToggle: (value: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => !option.disabled && onToggle(option.value)}
      aria-pressed={selected}
      disabled={option.disabled}
      className={cn(
        "group relative inline-flex max-w-full items-center rounded-full p-[2px] transition",
        selected
          ? "bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-[0_8px_20px_rgba(99,102,241,0.20)] sm:shadow-[0_16px_34px_rgba(99,102,241,0.20)]"
          : "bg-transparent ring-1 ring-gray-100 hover:ring-gray-200",
        option.disabled && "cursor-not-allowed opacity-60"
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium shadow-sm transition",
          selected ? "ring-1 ring-transparent" : "ring-1 ring-gray-200"
        )}
      >
        {option.icon ? (
          <span
            className={cn(
              "grid h-5 w-5 sm:h-7 sm:w-7 place-items-center rounded-full transition",
              selected ? "bg-indigo-50 text-indigo-600" : "bg-gray-100 text-gray-500"
            )}
          >
            {option.icon}
          </span>
        ) : null}
        <span className={cn("truncate text-xs sm:text-sm", selected ? "text-indigo-700" : "text-slate-700")}>
          {option.label}
        </span>
        {selected ? (
          <span className="ml-1 grid h-4 w-4 sm:h-5 sm:w-5 place-items-center rounded-full bg-indigo-600 text-white">
            <CheckIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </span>
        ) : null}
      </span>
    </button>
  );
}

function GradientField({
  icon,
  placeholder,
  value,
  onChange,
  name,
  as = "input",
  type = "text",
}: {
  icon?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
  name?: string;
  as?: "input" | "textarea";
  type?: string;
}) {
  return (
    <label className="group block">
      <div className="rounded-2xl p-[2px] ring-1 ring-gray-100 transition focus-within:bg-gradient-to-r focus-within:from-indigo-600 focus-within:to-indigo-500 focus-within:shadow-[0_8px_20px_rgba(99,102,241,0.20)] sm:focus-within:shadow-[0_16px_34px_rgba(99,102,241,0.20)]">
        <div className="flex items-start gap-2 rounded-[calc(theme(borderRadius.2xl)-2px)] bg-white px-3 py-2 sm:px-4 sm:py-3 ring-1 ring-gray-200">
          {icon ? <span className="mt-0.5 text-gray-500"><span className="h-4 w-4 sm:h-5 sm:w-5">{icon}</span></span> : null}
          {as === "textarea" ? (
            <textarea
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              className="min-h-[70px] sm:min-h-[84px] w-full resize-y rounded-md bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none"
            />
          ) : (
            <input
              name={name}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              className="h-8 sm:h-10 w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none"
            />
          )}
        </div>
      </div>
    </label>
  );
}

/* -------------- Step option data -------------- */

// Step 2 (vision)
const VISION_OPTIONS: ChipOption[] = [
  { value: "mobile", label: "Mobile App", icon: <DevicePhoneMobileIcon className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { value: "webapp", label: "Website / Web App", icon: <GlobeAltIcon className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { value: "ecommerce", label: "eCommerce Store", icon: <ShoppingBagIcon className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { value: "dashboard", label: "Dashboard / CRM", icon: <Squares2X2Icon className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { value: "design", label: "UI/UX Design", icon: <PaintBrushIcon className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { value: "ai", label: "AI Tools", icon: <SparklesIcon className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { value: "custom", label: "Custom Build", icon: <CodeBracketIcon className="h-4 w-4 sm:h-5 sm:w-5" /> },
];

// Step 3 (budget plans)
const BUDGET_PLANS: ChipOption[] = [
  { value: "2-4k", label: "$2K–$4K → MVP", icon: <BanknotesIcon className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { value: "4-8k", label: "$4K–$8K → Growth", icon: <BanknotesIcon className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { value: "8-12k", label: "$8K–$12K → Scale", icon: <BanknotesIcon className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { value: "12k+", label: "$12K+ → Enterprise", icon: <BanknotesIcon className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { value: "unsure", label: "I'm not sure", icon: <FaceSmileIcon className="h-4 w-4 sm:h-5 sm:w-5" /> },
];

// Step 4 (timeline)
const TIMELINE_OPTIONS: ChipOption[] = [
  { value: "2-4w", label: "2–4 Weeks", icon: <BoltIcon className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { value: "1-2m", label: "1–2 Months", icon: <CalendarDaysIcon className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { value: "2-3m", label: "2–3 Months", icon: <WrenchScrewdriverIcon className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { value: "3-5m+", label: "3–5+ Months", icon: <RocketLaunchIcon className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { value: "unsure", label: "I'm not sure", icon: <FaceSmileIcon className="h-4 w-4 sm:h-5 sm:w-5" /> },
];

/* ---------------- Upload Modal ---------------- */

const MAX_FILES = 5;
const ACCEPT =
  ".pdf,.doc,.docx,.ppt,.pptx,.zip,.fig,.xd,image/*,video/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/zip";

function FileRow({
  file,
  onRemove,
}: {
  file: File;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2">
      <div className="shrink-0 grid h-9 w-9 place-items-center rounded-lg bg-indigo-50 text-indigo-600">
        <DocumentTextIcon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium text-slate-800">
          {file.name}
        </div>
        <div className="text-xs text-gray-500">{formatBytes(file.size)}</div>
      </div>
      <button
        type="button"
        onClick={onRemove}
        className="grid h-7 w-7 place-items-center rounded-md bg-rose-50 text-rose-600 hover:bg-rose-100"
        aria-label="Remove file"
      >
        <TrashIcon className="h-4 w-4" />
      </button>
    </div>
  );
}

function UploadModal({
  open,
  onClose,
  initialFiles,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  initialFiles: File[];
  onSave: (files: File[]) => void;
}) {
  const [draft, setDraft] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open) {
      setDraft(initialFiles ?? []);
      setDragOver(false);
    }
  }, [open, initialFiles]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const addFiles = (incoming: FileList | File[]) => {
    const current = [...draft];
    const toAdd = Array.from(incoming);

    for (const f of toAdd) {
      if (current.length >= MAX_FILES) break;
      // Avoid duplicates by name + size + lastModified
      const dup = current.some(
        (x) =>
          x.name === f.name && x.size === f.size && x.lastModified === f.lastModified
      );
      if (!dup) current.push(f);
    }
    setDraft(current);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
    if (e.dataTransfer?.files?.length) addFiles(e.dataTransfer.files);
  };

  const handlePick = () => inputRef.current?.click();

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px]" />

      {/* Panel */}
      <div
        className="absolute left-1/2 top-1/2 w-[90vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-black/5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Upload File</h3>
            <p className="mt-1 text-xs text-gray-500">
              You can upload {MAX_FILES} files at a time.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-full text-slate-500 hover:bg-gray-100"
            aria-label="Close"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Dropzone */}
        <div
          className={cn(
            "mt-4 rounded-xl border-2 border-dashed p-6 text-center transition",
            dragOver ? "border-indigo-400 bg-indigo-50/50" : "border-gray-200"
          )}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
        >
          <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-indigo-50 text-indigo-600">
            <CloudArrowUpIcon className="h-5 w-5" />
          </div>
          <button
            type="button"
            onClick={handlePick}
            className="mt-3 text-sm font-medium text-indigo-600 hover:underline"
          >
            Click to upload
          </button>
          <span className="mx-1 text-sm text-gray-500">or drag and drop</span>
          <div className="mt-1 text-xs text-gray-400">
            File Upload (Optional): PDFs, mockups, docs
          </div>
          <input
            ref={inputRef}
            type="file"
            accept={ACCEPT}
            multiple
            className="sr-only"
            onChange={(e) => e.target.files && addFiles(e.target.files)}
          />
        </div>

        {/* Files list */}
        {draft.length > 0 && (
          <div className="mt-4 space-y-2">
            {draft.map((f, idx) => (
              <FileRow key={`${f.name}-${f.size}-${f.lastModified}`} file={f} onRemove={() => {
                setDraft((prev) => prev.filter((_, i) => i !== idx));
              }} />
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="mt-5 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              onSave(draft);
              onClose();
            }}
            className="rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-md"
          >
            Save files
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Main Form ---------------- */

export default function MultiStepForm() {
  const [step, setStep] = useState(0);

  // Step 0
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Step 2 (vision)
  const [vision, setVision] = useState<string[]>([]);

  // Step 3 (budget)
  const [budgetPlan, setBudgetPlan] = useState<string | null>(null);

  // Step 4 (timeline)
  const [timeline, setTimeline] = useState<string | null>(null);

  // Step 5 (blueprint form)
  const [bigIdea, setBigIdea] = useState("");
  const [audience, setAudience] = useState("");
  const [problem, setProblem] = useState("");
  const [references, setReferences] = useState("");
  const [mustHaves, setMustHaves] = useState("");
  const [files, setFiles] = useState<File[] | null>(null);

  // Upload modal control
  const [isUploadOpen, setUploadOpen] = useState(false);

  const current = STEPS[step];
  const onNext = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));

  const toggleVision = (v: string) =>
    setVision((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));
  const chooseBudget = (v: string) => setBudgetPlan((prev) => (prev === v ? null : v));
  const chooseTimeline = (v: string) => setTimeline((prev) => (prev === v ? null : v));

  const canContinue =
    step === 0
      ? fullName.trim() !== "" && email.trim() !== "" && phone.trim() !== ""
      : step === 1
      ? vision.length > 0
      : step === 2
      ? !!budgetPlan
      : step === 3
      ? !!timeline
      : step === 4
      ? bigIdea.trim() !== ""
      : true;

  return (
    <div className="mx-auto w-full rounded-2xl bg-[#FBFBFB] border-[10px] border-white p-4 sm:p-6 md:p-8 ring-1 ring-gray-100">
      <ScreenshotStepper steps={STEPS} current={step} />

      <div className="mt-4 sm:mt-6 space-y-2 text-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text">
          {current.title}
        </h1>
        {current.subtitle ? (
          <p className="text-xs text-gray-500 sm:text-sm">{current.subtitle}</p>
        ) : null}
      </div>

      <div className="mx-auto mt-6 sm:mt-8 max-w-3xl">
        {/* Step 0: Acquainted form */}
        {step === 0 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onNext();
            }}
            className="space-y-4"
          >
            <InputWithIcon
              name="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={setFullName}
              icon={<UserIcon className="h-5 w-5" />}
            />
            <InputWithIcon
              name="email"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={setEmail}
              icon={<EnvelopeIcon className="h-5 w-5" />}
            />
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg">🇮🇳</span>
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number (WhatsApp preferred)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 w-full rounded-[15px] border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 box-shadow: 0px 0px 40px -50px #412BE012;
 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <p className="pt-2 text-center text-xs text-gray-400">
              Your information is encrypted, secure, and never shared. Trusted by global founders and teams.
            </p>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="submit"
                disabled={!canContinue}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md active:scale-[0.99] w-[300px] justify-center",
                  !canContinue && "opacity-60 cursor-not-allowed"
                )}
              >
                Next • {STEPS[step].ctaNext ?? "Continue"}
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 1: Vision */}
        {step === 1 && (
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-center text-xs text-gray-500 sm:text-sm">
              Don't worry if you're not sure — pick what feels closest. We'll guide you through the rest.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {VISION_OPTIONS.map((opt) => (
                <OptionChip key={opt.value} option={opt} selected={vision.includes(opt.value)} onToggle={toggleVision} />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={onNext}
                disabled={!canContinue}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md active:scale-[0.99] w-[300px] justify-center",
                  !canContinue && "opacity-60 cursor-not-allowed"
                )}
              >
                Next • {STEPS[step].ctaNext ?? "Continue"}
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Budget */}
        {step === 2 && (
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {BUDGET_PLANS.map((opt) => (
                <OptionChip
                  key={opt.value}
                  option={opt}
                  selected={budgetPlan === opt.value}
                  onToggle={chooseBudget}
                />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={onNext}
                disabled={!canContinue}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md active:scale-[0.99] w-[300px] justify-center",
                  !canContinue && "opacity-60 cursor-not-allowed"
                )}
              >
                Next • {STEPS[step].ctaNext ?? "Continue"}
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Timeline */}
        {step === 3 && (
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {TIMELINE_OPTIONS.map((opt) => (
                <OptionChip
                  key={opt.value}
                  option={opt}
                  selected={timeline === opt.value}
                  onToggle={chooseTimeline}
                />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={onNext}
                disabled={!canContinue}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md active:scale-[0.99] w-[300px] justify-center",
                  !canContinue && "opacity-60 cursor-not-allowed"
                )}
              >
                Share Your Vision
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Vision Blueprint (gradient inputs + modal upload) */}
        {step === 4 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onNext();
            }}
            className="mx-auto max-w-3xl"
          >
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
              <GradientField
                icon={<LightBulbIcon className="h-4 w-4 sm:h-5 sm:w-5" />}
                placeholder="What's the big idea?"
                value={bigIdea}
                onChange={setBigIdea}
                name="bigIdea"
              />
              <GradientField
                icon={<UserGroupIcon className="h-4 w-4 sm:h-5 sm:w-5" />}
                placeholder="Who is it for?"
                value={audience}
                onChange={setAudience}
                name="audience"
              />
              <GradientField
                icon={<ArrowPathIcon className="h-4 w-4 sm:h-5 sm:w-5" />}
                placeholder="What problem are you solving?"
                value={problem}
                onChange={setProblem}
                name="problem"
              />
              <GradientField
                icon={<LinkIcon className="h-4 w-4 sm:h-5 sm:w-5" />}
                placeholder="Any references, competitors, or moodboards?"
                value={references}
                onChange={setReferences}
                name="references"
              />
              <GradientField
                icon={<WrenchScrewdriverIcon className="h-4 w-4 sm:h-5 sm:w-5" />}
                placeholder="Must-haves or deal breakers?"
                value={mustHaves}
                onChange={setMustHaves}
                name="mustHaves"
              />

              {/* Upload trigger (opens modal) */}
              <div className="md:col-span-2">
                <div className="rounded-2xl p-[2px] ring-1 ring-gray-100">
                  <div className="flex items-center gap-3 rounded-[calc(theme(borderRadius.2xl)-2px)] bg-white px-3 py-2 sm:px-4 sm:py-3 ring-1 ring-gray-200">
                    <span className="text-gray-500">
                      <PaperClipIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                    <div className="flex-1">
                      <span className="block text-xs sm:text-sm text-slate-700">
                        File Upload (Optional): PDFs, mockups, docs
                      </span>
                      <span className="mt-0.5 block text-xs text-gray-500">
                        {files && files.length > 0
                          ? `${files.length} file${files.length > 1 ? "s" : ""} selected`
                          : "No files selected"}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setUploadOpen(true)}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:shadow-md"
                    >
                      Upload files
                      <CloudArrowUpIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="submit"
                disabled={!canContinue}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md active:scale-[0.99] w-[300px] justify-center",
                  !canContinue && "opacity-60 cursor-not-allowed"
                )}
              >
                Submit & Get Started
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Modal */}
            <UploadModal
              open={isUploadOpen}
              onClose={() => setUploadOpen(false)}
              initialFiles={files ?? []}
              onSave={(f) => setFiles(f)}
            />
          </form>
        )}

        {/* Step 5: Final / Welcome */}
        {step === 5 && (
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4">
              <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-emerald-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
                Welcome
              </span>
            </div>

            <h2 className="text-xl font-extrabold text-indigo-700 sm:text-2xl md:text-3xl">
              {current.title}
            </h2>
            <p className="mt-2 text-xs text-gray-500 sm:text-sm">{current.subtitle}</p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 active:scale-[0.99] sm:px-6 sm:py-3"
              >
                Let's Chat On WhatsApp
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50 active:scale-[0.99] sm:px-6 sm:py-3"
              >
                View Our Work
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}