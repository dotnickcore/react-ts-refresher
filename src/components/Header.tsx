import { HeaderProps } from "../models/interfaces/HeaderProps";

function Header({ image, children }: HeaderProps) {
    return (
        <header>
            <img src={image.src} alt={image.alt} />
            {children}
        </header>
    )
}

export default Header;