import { cn } from '@/common/utils/styles'
import { ImageProps, Image } from 'react-native'

export type CImageProps = ImageProps

const CImage = ({ className, ...rest }: CImageProps) => {
  return <Image className={cn('', className)} {...rest} />
}

export default CImage
