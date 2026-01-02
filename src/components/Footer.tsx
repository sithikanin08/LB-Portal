const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl font-semibold text-foreground">
            AIESEC in SLIIT
          </span>
        </div>
        
        <p className="font-body text-sm text-muted-foreground text-center">
          Leadership Board Applications 26.27 • Youth Leadership Development
        </p>
        
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} AIESEC in SLIIT
        </p>
      </div>
    </footer>
  );
};

export default Footer;
