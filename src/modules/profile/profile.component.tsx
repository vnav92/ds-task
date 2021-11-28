import { useEffect, useState } from 'react';
import { Avatar, Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { PageHeading, Text, Anchor } from '../../components';
import { fetchData } from '../../api';
import { formInitialValues } from '../form/form.form';

import styles from './profile.module.scss';

export const Profile = () => {
  const [profileData, setProfileData] = useState<
    typeof formInitialValues | null
  >(null);

  useEffect(() => {
    setProfileData(fetchData() || null);
  }, []);

  return (
    <>
      <PageHeading>Profile</PageHeading>
      {profileData ? (
        <div className={styles.wrapper}>
          <Avatar
            src={profileData.avatar}
            className={styles.avatar}
            size={{ xs: 150, sm: 200, md: 200, lg: 200, xl: 200, xxl: 200 }}
          />
          <Row>
          <Text className={classNames(styles.dataProperty, styles.userName)}>
            {profileData.firstName} {profileData.lastName}
          </Text>
          </Row>
          <Row>
            <Text className={classNames(styles.dataProperty, styles.userBirthdayDate)}>{profileData.birthdayDate}</Text>
          </Row>
          <Row justify="center">
            <div className={classNames(styles.contactSection, styles.sectionMarginTop)}>
              <Row className={styles.textLink}>
                <Text className={classNames(styles.contactDataProperty, styles.dataProperty)}>{profileData.phoneNumber}</Text>
                <Anchor href={`tel:${profileData.phoneNumber}`}>
                  <ArrowRightOutlined className={styles.linkIcon}/>
                </Anchor>
              </Row>
              <Row className={styles.textLink}>
                <Text className={classNames(styles.contactDataProperty, styles.dataProperty)}>{profileData.emailAddress}</Text>
                <Anchor href={`mailto:${profileData.emailAddress}`}>
                <ArrowRightOutlined className={styles.linkIcon} />
                </Anchor>
              </Row>
            </div>
          </Row>
          <Row justify="center">
          <div className={classNames(styles.aboutSection, styles.sectionMarginTop)}>
            <Text className={styles.dataProperty}>{profileData.about}</Text>
          </div>
          </Row>
        </div>
      ) : (
        <p>empty</p>
      )}
    </>
  );
};
