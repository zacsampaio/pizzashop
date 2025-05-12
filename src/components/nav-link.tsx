import { Link, useLocation, type LinkProps} from "react-router-dom";

export type NavLinkProps = LinkProps;

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation();

  return (
    <Link
      data-current={pathname === props.to}
      className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm font-medium data-[current=true]:text-foreground"
      {...props}
    />
  );
}
