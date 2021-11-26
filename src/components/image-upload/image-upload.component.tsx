import React, { useState } from 'react';
import { Upload, message } from 'antd';
import { FieldProps } from 'formik';
import { RcFile } from 'antd/lib/upload';
import classNames from 'classnames';

import styles from './image-upload.module.scss';

const IMAGE_MAX_MEGABYTES = 4;

export const ImageUpload: React.FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const getBase64 = (img: RcFile | Blob, callback: (result: string | ArrayBuffer | null) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));

    if (img) {
      reader.readAsDataURL(img);
    }
  }
  
  const beforeUpload = (file: RcFile) => {
    const isCorrectSize = file.size / 1024 / 1024 < IMAGE_MAX_MEGABYTES;
    if (!isCorrectSize) {
      message.error(`Image should not be bigger than ${IMAGE_MAX_MEGABYTES}mb`)
    }
  
    return isCorrectSize
  }

    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className={classNames({ [styles.imageUploadError]: form.errors[field.name] })}
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={(info) => getBase64(info.file.originFileObj!, (imageUrl) => {
          setImageUrl(imageUrl as string);
          form.setFieldValue(field.name, imageUrl);
        })}
        {...props}
      >
        {imageUrl 
          ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
          : '+'
          }
      </Upload>
    );
}