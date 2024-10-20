import { ExternalLinkIcon } from "@/components/Icon"
import { Link } from "@/components/Link"

export default function LinkItem({ children, href }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      display="flex"
      alignItems="top"
      justifyContent="flex-start"
    >
      {children}
      <ExternalLinkIcon size="1.5rem" />
    </Link>
  )
}