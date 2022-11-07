import { ExternalLinkIcon } from "@components/Icon"

import { Link } from "@components/Link"

export default function LinkItem({ children, href }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      textDecoration="underline"
      display="flex"
      alignItems="center"
      _hover={{ color: "red.500" }}
    >
      {children}
      <ExternalLinkIcon size="1.25rem" ml={3} />
    </Link>
  )
}
