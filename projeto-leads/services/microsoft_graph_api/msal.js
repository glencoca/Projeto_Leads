import * as msal from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID}`,
    scopes: ["user.read", "mailboxsettings.read", "calendars.readwrite"],
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true
  }
};




const msalInstance = new msal.PublicClientApplication(msalConfig);

const accounts = msalInstance.getAllAccounts();
if (accounts && accounts.length > 0) {
  msalInstance.setActiveAccount(accounts[0]);
}


export { msalInstance };
