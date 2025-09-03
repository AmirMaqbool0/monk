"use client";
import React from "react";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

type Props = {
  value: string; // E.164, e.g. +919876543210
  onChange: (value: string) => void;
  defaultCountry?: string; // e.g., "IN"
  placeholder?: string;
};

const PhoneFieldOnlyFlag: React.FC<Props> = ({
  value,
  onChange,
  defaultCountry = "IN",
  placeholder = "Phone Number (WhatsApp preferred)",
}) => {
  return (
    <div className="relative">
      <PhoneInput
        flags={flags}                 // SVG flag images
        value={value}
        onChange={(v) => onChange(v || "")}
        defaultCountry={defaultCountry as any}
        placeholder={placeholder}
        international={false}
        className="phone-only-flag"
      />

      {/* Styling to keep only the flag visible near the input */}
      <style jsx global>{`
        .phone-only-flag {
          display: flex;
          align-items: center;
          width: 100%;
          height: 48px;
          background: #fff;
          border: 1px solid #e5e7eb; /* gray-200 */
          border-radius: 15px;
          padding: 0 12px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0px 0px 40px -50px #412be012;
        }
        .phone-only-flag:focus-within {
          border-color: #a5b4fc; /* indigo-300 */
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.12);
        }

        /* Left country button — show only the flag + arrow (no text) */
        .phone-only-flag .PhoneInputCountry {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-right: 8px;
          background: transparent;
          border: none;
          padding: 0;
          height: 100%;
        }
        .phone-only-flag .PhoneInputCountryIcon {
          width: 22px;
          height: 16px;
          border-radius: 3px;
          overflow: hidden;
          box-shadow: 0 0 0 1px #e5e7eb;
        }
        /* The native select is kept for accessibility but visually hidden; flag stays visible */
        .phone-only-flag .PhoneInputCountrySelect {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
        }
        .phone-only-flag .PhoneInputCountrySelectArrow {
          margin-left: 2px;
          border-top-color: #9ca3af; /* gray-400 */
        }

        /* The input */
        .phone-only-flag .PhoneInputInput {
          flex: 1;
          border: none;
          outline: none;
          height: 100%;
          font-size: 0.875rem; /* text-sm */
          color: #1f2937; /* gray-800 */
          background: transparent;
        }
        .phone-only-flag .PhoneInputInput::placeholder {
          color: #9ca3af; /* gray-400 */
        }

        @media (prefers-reduced-motion: reduce) {
          .phone-only-flag {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default PhoneFieldOnlyFlag;