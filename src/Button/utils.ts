import { getMatColor, MatColorShade, MatColorShades, MatColorVariants } from './matColors'
import { ColorVariant } from './types'

export const getColorByVariant = (
  variant: ColorVariant,
  shade: MatColorShade = MatColorShades.S500
) => {
  console.log(';variant ', variant)
  switch (variant) {
    case 'accent':
      return getMatColor(MatColorVariants.TEAL, shade)
    case 'primary':
      return getMatColor(MatColorVariants.INDIGO, shade)
    case 'secondary':
      return getMatColor(MatColorVariants.PINK, shade)
    case 'warning':
      return getMatColor(MatColorVariants.AMBER, shade)
    case 'danger':
      return getMatColor(MatColorVariants.RED, shade)
    case 'default':
      return getMatColor(MatColorVariants.GREY, shade)
    default:
      return getMatColor(variant, shade)
  }
}
