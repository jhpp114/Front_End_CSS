import React from 'react'

function Coin(props) {
    let theCoin = '';
    console.log(props.isHead);
    if (props.isHead) {
        theCoin = 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg';
    } else {
        theCoin = 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=48dd8a3e9ab981262a02d7dd377096c8f9f2df80-1602041013-0-Ad2Mfsg7VmCK4dlJafx05l7IArLxJLcxnfWJE0zIlQZXBokf2sL6vC4pUDnWNdgixFbJ9D1LaGaMeVTRhu8rrMJgdEM7sIebheQZ3y1fEt1liRC0M0tOUOetly7LG84pKvz5QpiAkUfVhf1JiNRyw14qJX9W73Q3zXNWBcUSJiM-7ZL6w3v2kmOYHAy1f5sBsjsa7x1g3mFYgqpq_KZL0IqFR9x5d8_bZMGIkOfilvyYTnIY2zCt91RGiXhAf3pAD0oXgeIEy8Y5HMJ6f2fl00JDIrmp5-7FUmtBSHALUgoLs520uWq31wk37j4w3YnG5Q';
    }
    return (
        <div>
            <img src={theCoin} alt="coin head or flip"
                width="100px"
            />
        </div>
    )
}

export default Coin;
