/*import React, { useEffect, useState } from 'react';

const Aranceles = () => {
  const CLIENT_ID = '986442823669-h06cook1knvuferebgdcehal8fdrf00n.apps.googleusercontent.com';
  const API_KEY = 'YOUR_API_KEY';
  const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
  const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

  let tokenClient;
  let gapiInited = false;
  let gisInited = false;

  const [data, setData] = useState('');

  const handleAuthClick = () => {
    // Resto del código para handleAuthClick
  }

  const handleSignoutClick = () => {
    // Resto del código para handleSignoutClick
  }

  const listMajors = async () => {
    try {
      const response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: 'YOUR_SPREADSHEET_ID',
        range: 'consultas!A:E',
      });
      const range = response.result;

      if (!range || !range.values || range.values.length === 0) {
        setData('No values found.');
      } else {
        const output = range.values.reduce(
          (str, row) => `${str}${row.join('\t')}\n`,
          'Name\tMajor:\n'
        );
        setData(output);
      }
    } catch (err) {
      console.error('Error al obtener los valores:', err);
      setData('Error: ' + err.message);
    }
  }

  const gapiLoaded = () => {
    // Resto del código para gapiLoaded
  }

  const gisLoaded = () => {
    // Resto del código para gisLoaded
  }

  const maybeEnableButtons = () => {
    // Resto del código para maybeEnableButtons
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.async = true;
    script.defer = true;
    script.onload = gapiLoaded;
    document.head.appendChild(script);

    const gsiScript = document.createElement('script');
    gsiScript.src = 'https://accounts.google.com/gsi/client';
    gsiScript.async = true;
    gsiScript.defer = true;
    gsiScript.onload = gisLoaded;
    document.head.appendChild(gsiScript);
  }, []);

  return (
    <div>
      <p>Sheets API Quickstart</p>
      <button id="authorize_button" onClick={handleAuthClick}>Authorize</button>
      <button id="signout_button" onClick={handleSignoutClick}>Sign Out</button>
      <pre id="content" style={{ whiteSpace: 'pre-wrap' }}>{data}</pre>
    </div>
  );
}

export default Aranceles;*/
