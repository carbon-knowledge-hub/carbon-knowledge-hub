import { ButtonLink } from "@components/Link"

import { ArrowRightIcon } from "@components/Icon"

export default function EmailLink({
  label = "Contact",
  subject = "B20/BNEF Carbon Centre of Excellence",
  body = "I would like to find out more about becoming a partner to the Carbon Centre of Excellence. Please contact me to set up a discussion.",
  ...restProps
}) {
  return (
    <ButtonLink
      href={`mailto:co2excel@bloomberg.net?subject=${subject}&body=${body}`}
      rightIcon={<ArrowRightIcon size="1.25rem" />}
      alignSelf="flex-start"
      {...restProps}
    >
      {label}
    </ButtonLink>
  )
}
