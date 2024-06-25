"use client";
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation("global");

  return (
    <div>
      <h1>test {t('business')}</h1>

    </div>
  );
};

export default MyComponent;
