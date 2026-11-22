import { LanguageProvider } from "@/lib/i18n";
import { LANG_BOOT_SCRIPT } from "@/lib/i18n/boot";

/** Every calculator shares the visitor's EN/ID choice (Indonesian by default). */
export default function FormsLayout({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            {/* Runs before first paint so returning English visitors don't see the Indonesian prerender flash. */}
            <script dangerouslySetInnerHTML={{ __html: LANG_BOOT_SCRIPT }} />
            {children}
        </LanguageProvider>
    );
}
