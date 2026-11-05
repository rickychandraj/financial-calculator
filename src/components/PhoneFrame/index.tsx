import React from "react";

/** Decorative 300×620 phone mockup used on the homepage. */
export const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
    <div className="phone-frame">
        <div className="phone-bezel">
            {children}
            <div className="phone-status">
                <span>9:41</span>
                <img src="/home/status-large.svg" alt="" width={25} height={12} />
            </div>
            <div className="phone-glare" />
            <div className="phone-island" />
        </div>
        <span className="phone-btn-right" />
        <span className="phone-btn-left" />
    </div>
);
