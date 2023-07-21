import React from 'react'
import { useTranslation } from 'react-i18next';

const MySkills = () => {
    const { t } = useTranslation();

    return (
        <div>
            <button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="motion-reduce:hidden animate-spin ..." viewBox="0 0 24 24"></svg>
  {t('Processing...')}
</button>
        </div>
    )
}

export default MySkills