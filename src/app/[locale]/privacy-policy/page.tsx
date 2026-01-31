import React from 'react';
import { useTranslations } from 'next-intl';

const PrivacyPolicy = () => {
  const t = useTranslations('PrivacyPolicy');

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="text-start pt-16 md:pt-20 lg:pt-28">
        <h1 className="text-3xl xl:text-4xl font-semibold mb-8">
          {t('title')}
        </h1>
        <p className="xl:text-xl text-lg font-light mb-8">
          {t('subtitle')}
        </p>
      </header>
      <div className="p-6 text-xl font-light">
        <div className="mb-12">
          <p className="mb-4">{t('introduction')}</p>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              {t('administrator')}
              <p className="mt-2 font-semibold">{t('companyInfo')}</p>
            </li>
            <li>{t('dataUsage')}</li>
            <li>{t('dataProvision')}</li>
            <li>
              {t('legalBasis')}
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>{t('legalBasis1')}</li>
                <li>{t('legalBasis2')}</li>
                <li>{t('legalBasis3')}</li>
              </ul>
            </li>
            <li>{t('dataSharing')}</li>
            <li>{t('dataRetention')}</li>
            <li>{t('dataRights')}</li>
            <li>
              {t('contactInfo')}
              <p className="mt-2 font-semibold">{t('email')}</p>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;