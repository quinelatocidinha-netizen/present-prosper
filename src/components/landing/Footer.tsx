export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/30">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-[1fr_auto_auto] gap-8 md:gap-16 items-start">
          {/* Brand */}
          <div>
            <p className="font-serif text-lg font-bold text-foreground mb-2">
              Quinelato Giuseppe
            </p>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed max-w-xs">
              Soluções Web e Tecnológicas
            </p>
          </div>

          {/* Legal links */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-3">
              Legal
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-3">
              Contato
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                  E-mail
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-muted-foreground">
            © {year} Quinelato Giuseppe Soluções Web e Tecnológicas. Todos os direitos reservados.
          </p>
          <div className="w-8 h-px bg-primary/30 sm:hidden" />
        </div>
      </div>
    </footer>
  );
}
