import locales from './locales';
import execXhr from '../../util/xhr';

export const SET_LOCALE = 'SET_LOCALE';

export async function setLocale(dispatch, locale) {
  if (!Object.keys(locales).includes(locale)) {
    throw new Error(`Unrecognized locale: '${locale}'`);
  }

  // update server-side
  await execXhr({
    method: 'PATCH',
    url: '/api/session',
    payload: { locale },
  });

  // update client-side
  dispatch({
    type: SET_LOCALE,
    locale,
  });
}
