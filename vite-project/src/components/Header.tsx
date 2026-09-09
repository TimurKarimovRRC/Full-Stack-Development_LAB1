export function Header() {
    return (
        <header className="site-header">
            <img
                src="/logo.svg"
                alt="Pixell River Financial Logo"
                className="logo-img"
            />

            <div className="header-text">
                <h1 className="site-title">
                    Pixell River Employee Directory
                </h1>

                <p className="greeting">
                    Welcome back to the portal!
                </p>
            </div>
        </header>
    );
}