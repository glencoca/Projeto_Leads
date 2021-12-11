import * as msal from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID}`,
    scopes: [
      "user.read",
      "mailboxsettings.read",
      "calendars.readwrite",
      "mail.read",
      "mail.readbasic",
      "mail.read.shared",
      "mail.readwrite",
      "tasks.readwrite",
      "directory.accessasuser.all",
      "directory.read.all",
      "directory.readwrite.all",
      "group.read.all",
      "group.readWrite.all",
    ],
    redirectUri: "http://localhost:3000/dashbord",
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
