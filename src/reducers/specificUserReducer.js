const initialState = {
  userData: null, // Data uživatele - výchozí hodnota je null
  loading: false, // Indikátor načítání - výchozí hodnota je false
  error: null, // Chyba - výchozí hodnota je null
};

const specificUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SPECIFIC_USER_SUCCESS':
      return {
        ...state,
        userData: action.payload, // Nastavení dat uživatele na poskytnutá data
        loading: false, // Nastavení indikátoru načítání na false
        error: null, // Nastavení chyby na null
      };
    case 'FETCH_SPECIFIC_USER_ERROR':
      return {
        ...state,
        userData: null, // Nastavení dat uživatele na null
        loading: false, // Nastavení indikátoru načítání na false
        error: action.payload, // Nastavení chyby na poskytnutou chybovou zprávu
      };
    default:
      return state; // Výchozí případ - vrácení původního stavu
  }
};

export default specificUserReducer;
