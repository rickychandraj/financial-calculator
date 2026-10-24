export const Header = () => {
    return (
        <header className="calculator-hero">
            <div className="calculator-hero-art" role="img" aria-label="Kalkulator Keuangan Mama BerUANG" />
            <div className="calculator-hero-content glass-surface">
                <div className="calculator-portrait" role="img" aria-label="Ayu Sara" />
                <div className="calculator-hero-copy">
                    <h1>Brought to You by Ayu Sara Herlia-Hinch, SE, MBA, QWP™, CFP®, WMI</h1>
                    <p className="calculator-hero-subtitle">Your Online Money Mom</p>
                    <p className="calculator-hero-description">Simplifying Money &amp; Investments for Busy Lives 💅</p>
                    <div className="calculator-badges">
                        {['CFP®', 'MBA', 'QWP™', 'WMI', '10+ yrs financial practitioner'].map((badge) => (
                            <span key={badge}>{badge}</span>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};
