import { useTheme } from "./ModeContext";

export default function Footer() {

    const { theme } = useTheme();

    return (
        <footer className={"footer mt-auto py-3" + (theme === "dark"? " bg-secondary" : " bg-light")}>
            <div className="text-center p-3" >
                © 2020 Copyright: <b>Alexey Berezovikov</b>
            </div>
        </footer>
    );
}