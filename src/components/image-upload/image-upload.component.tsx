import React, { useEffect, useState } from 'react'
import { Upload, message } from 'antd'
import { FieldProps } from 'formik'
import { RcFile } from 'antd/lib/upload'
import classNames from 'classnames'

import styles from './image-upload.module.scss'

const IMAGE_MAX_MEGABYTES = 3

export const ImageUpload: React.FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    if (field.value) {
      setImageUrl(field.value)
    }
  }, [field.value])

  const getBase64 = (
    img: RcFile | Blob,
    callback: (result: string | ArrayBuffer | null) => void
  ) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))

    if (img) {
      reader.readAsDataURL(img)
    }
  }

  const beforeUpload = (file: RcFile) => {
    const isCorrectSize = file.size / 1024 / 1024 < IMAGE_MAX_MEGABYTES
    if (!isCorrectSize) {
      message.error(`Image should not be bigger than ${IMAGE_MAX_MEGABYTES}mb`)
    }

    return isCorrectSize
  }

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className={classNames({
        [styles.imageUploadError]:
          form.errors[field.name] && form.touched[field.name]
      })}
      showUploadList={false}
      beforeUpload={beforeUpload}
      customRequest={() => {}}
      onChange={(info) =>
        getBase64(info.file.originFileObj!, (imageUrl) => {
          setImageUrl(imageUrl as string)
          form.setFieldValue(field.name, imageUrl)
        })
      }
      {...props}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
      ) : (
        '+'
      )}
    </Upload>
  )
}
