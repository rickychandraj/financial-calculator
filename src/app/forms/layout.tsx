import type { ReactNode } from "react";

export default function CalculatorLayout({ children }: { children: ReactNode }) {
  return <div className="calculator-home calculator-form-layout">{children}</div>;
}
