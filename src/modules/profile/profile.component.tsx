import { useEffect, useState } from 'react';
import { Avatar } from 'antd';
import { PageHeading, Text, Title } from '../../components';
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
          <Title>
            {profileData.firstName} {profileData.lastName}
          </Title>
          <Text>{profileData.birthdayDate}</Text>
          <Text>{profileData.emailAddress}</Text>
          <Text>{profileData.phoneNumber}</Text>
        </div>
      ) : (
        <p>empty</p>
      )}
    </>
  );
};
