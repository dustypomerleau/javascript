import createLoader from '../../util/load-change.js';

const load = createLoader({
	version: '5',
	baseUrl: 'https://clerk.com/docs/upgrade-guides/v5',
});

const reactChangesList = [
	'magiclinkerrorcode',
	'usemagiclink',
	'ismagiclinkerror',
	'magiclinkerror',
	'handlemagiclinkverification',
	'clerkprovider-frontendapi-2',
	'setsession',
	'navigate-to-routerpush-routerreplace',
	'afterswitchorganizationurl',
	'appearance-organizationpreview-organizationswitcher',
	'useorganization-invitationlist',
	'useorganization-membershiplist',
	'useorganizations',
	'userprofile-prop',
	'organizationprofile-settings',
	'userprofile-security',
	'mfa-dropdown',
	'connected-accounts-dropdown',
	'userbuttonpopoveractionbuttontext-removed',
	'userbuttontrigger-userbuttonbox-invert',
	'organizationswitcherpopoveractionbuttontext-removed',
	'card-changes',
	'alternativemethods-backlink',
	'button-to-organizationlistcreateorganizationactionbutton',
	'remove-socialbuttonsblockbuttonarrow',
	'remove-identitypreview-avatar',
	'withsession-removed',
	'withclerk-removed',
	'withuser-removed-2',
	'withclerk-hof-removed',
	'withsession-hof-removed',
	'withuser-hof-removed',
	'multisessionappsupport-import-change',
	'clerkprovideroptionswrapper-dropped',
	'aftersignouturl-behavior-change',
	'aftersigninurl-behavior-change-2',
	'aftersignupurl-behavior-change',
	'new-localization-keys',
	'removed-localization-keys',
	'changed-localization-keys',
	'signoutcallback-to-redirecturl',
	'min-react-version',
	'getorganizationlist-return-type-change',
	'getorganizationinvitationlist-return-type-change',
	'getorganizationmembershiplist-return-type-change',
];

export default {
	nextjs: load('next', [
		'api-key-to-secret-key',
		'frontend-api-to-publishable-key',
		'with-clerk-middleware-removed',
		'auth-middleware-deprecated',
		'clerk-js-version-next-public',
		'authmiddleware-apikey',
		'authmiddleware-frontendapi',
		'createclerkclient-apikey',
		'createclerkclient-frontendapi',
		'getauth-apikey',
		'clerkprovider-frontendapi-2',
		'import-nextjs-app-beta',
		'import-nextjs-ssr',
		'import-nextjs-edge-middleware',
		'import-nextjs-edge-middlewarefiles',
		'import-api-url',
		'import-api-version',
		'import-clerk-js-url',
		'import-clerk-js-version',
		'import-domain',
		'import-is-satellite',
		'import-proxy-url',
		'import-publishable-key',
		'import-secret-key',
		'import-sign-in-url',
		'import-sign-up-url',
		'import-nextjs-api',
		'api-url-value-change',
		'ismagiclinkerror',
		'usemagiclink',
		'magiclinkerrorcode',
		'setsession',
		'organizationprofile-settings',
		'userprofile-security',
		'mfa-dropdown',
		'connected-accounts-dropdown',
		'userbuttonpopoveractionbuttontext-removed',
		'userbuttontrigger-userbuttonbox-invert',
		'organizationswitcherpopoveractionbuttontext-removed',
		'card-changes',
		'alternativemethods-backlink',
		'button-to-organizationlistcreateorganizationactionbutton',
		'remove-socialbuttonsblockbuttonarrow',
		'remove-identitypreview-avatar',
		'multisessionappsupport-import-change',
		'auth-import-change',
		'currentuser-import-change',
		'authmiddleware-import-change',
		'buildclerkprops-import-change',
		'verifytoken-import-change',
		'verifyjwt-import-change',
		'decodejwt-import-change',
		'signjwt-import-change',
		'constants-import-change',
		'createauthenticaterequest-import-change',
		'createisomorphicrequest-import-change',
		'clerk-import-change',
		'isclerkapiresponserror-import-change',
		'isemaillinkerror-import-change',
		'isknownerror-import-change',
		'ismetamaskerror-import-change',
		'withsession-removed',
		'withclerk-removed',
		'withuser-removed-2',
		'withclerk-hof-removed',
		'withsession-hof-removed',
		'withuser-hof-removed',
		'next-public-clerk-js-url',
		'aftersignouturl-behavior-change',
		'aftersigninurl-behavior-change-2',
		'aftersignupurl-behavior-change',
		'new-localization-keys',
		'removed-localization-keys',
		'changed-localization-keys',
		'signoutcallback-to-redirecturl',
		'min-nextjs-version',
		'redirecttosignin-import-path',
		'redirecttosignup-import-path',
		'getorganizationlist-return-type-change',
		'getorganizationinvitationlist-return-type-change',
		'getorganizationmembershiplist-return-type-change',
	]),
	// since we export clerk-react at the top level from the gatsby plugin
	// if you're using gatsby, we also need to scan for the react changes
	gatsby: load(
		'gatsby',
		dedupeMerge(reactChangesList, [
			'api-key-to-secret-key',
			'createclerkclient-apikey',
			'apikey-to-publishable-key',
			'createclerkclient-frontendapi',
			'ismagiclinkerror',
			'usemagiclink',
			'magiclinkerrorcode',
			'setsession',
			'api-url-value-change',
			'withserverauth-return-type',
			'clerk-import-change',
		]),
	),
	remix: load('remix', [
		'clerkerrorboundary-removed',
		'createclerkclient-apikey',
		'rootauthloader-apikey',
		'getauth-apikey',
		'clerkprovider-frontendapi-2',
		'rootauthloader-frontendapi',
		'frontend-api-to-publishable-key',
		'api-key-to-secret-key',
		'ismagiclinkerror',
		'magiclinkerrorcode',
		'usemagiclink',
		'setsession',
		'aftersignouturl-behavior-change',
		'aftersigninurl-behavior-change-2',
		'aftersignupurl-behavior-change',
		'new-localization-keys',
		'removed-localization-keys',
		'changed-localization-keys',
		'signoutcallback-to-redirecturl',
		'clerk-import-change',
		'getorganizationlist-return-type-change',
		'getorganizationinvitationlist-return-type-change',
		'getorganizationmembershiplist-return-type-change',
	]),
	expo: load('expo', [
		'apikey-to-publishable-key',
		'ismagiclinkerror',
		'usemagiclink',
		'magiclinkerrorcode',
		'setsession',
		'organizationprofile-settings',
		'userprofile-security',
		'mfa-dropdown',
		'connected-accounts-dropdown',
		'userbuttonpopoveractionbuttontext-removed',
		'userbuttontrigger-userbuttonbox-invert',
		'organizationswitcherpopoveractionbuttontext-removed',
		'card-changes',
		'alternativemethods-backlink',
		'button-to-organizationlistcreateorganizationactionbutton',
		'remove-socialbuttonsblockbuttonarrow',
		'remove-identitypreview-avatar',
		'aftersignouturl-behavior-change',
		'aftersigninurl-behavior-change-2',
		'aftersignupurl-behavior-change',
		'new-localization-keys',
		'removed-localization-keys',
		'changed-localization-keys',
		'signoutcallback-to-redirecturl',
		'getorganizationlist-return-type-change',
		'getorganizationinvitationlist-return-type-change',
		'getorganizationmembershiplist-return-type-change',
	]),
	fastify: load('fastify', [
		'api-key-to-secret-key',
		'api-url-value-change',
		'frontend-api-to-publishable-key',
		'createclerkclient-apikey',
		'createclerkclient-frontendapi',
		'clerkplugin-frontendapi',
		'clerk-import-change',
	]),
	node: load('node', [
		'api-key-to-secret-key',
		'api-url-value-change',
		'frontend-api-to-publishable-key',
		'clerkexpressrequireauth-apikey',
		'clerkexpresswithauth-apikey',
		'createclerkclient-apikey',
		'createclerkexpressrequireauth-apikey',
		'createclerkexpresswithauth-apikey',
		'createclerkclient-frontendapi',
		'createclerkexpressrequireauth-frontendapi',
		'clerkexpressrequireauth-frontendapi',
		'createclerkexpresswithauth-frontendapi',
		'clerkexpresswithauth-frontendapi',
		'setclerkapikey',
		'setclerkapiversion',
		'setclerkhttpoptions',
		'setclerkserverapiurl',
		'cjs-esm-instance',
		'legacyauthobject-removed',
		'clerk-import-change',
	]),
	react: load('react', reactChangesList),
	js: load('js', [
		'magiclinkerror',
		'ismagiclinkerror',
		'magiclinkerrorcode',
		'usemagiclink',
		'handlemagiclinkverification',
		'external-account-avatarurl', // shared w/ all
		'organization-logourl', // shared w/ all
		'user-orgpublicdata-profileimageurl', // shared w/ all
		'setsession',
		'user-update-password', // shared w/ all
		'experimental-canusecaptcha',
		'experimental-captchaurl',
		'experimental-captchasitekey',
		'getorganizationmemberships',
		'lastorganizationinvitation-member',
		'unstable-invitationupdate',
		'unstable-membershipupdate',
		'organization-create-string', // maybe shared with all?
		'organization-getpendinginvitations', // maybe shared with all?
		'user-createexternalaccount-redirecturl', // maybe shared with all?
		'signup-attemptweb3walletverification-generatedsignature',
		'redirecttohome',
		'organizationprofile-settings',
		'userprofile-security',
		'mfa-dropdown',
		'connected-accounts-dropdown',
		'userbuttonpopoveractionbuttontext-removed',
		'userbuttontrigger-userbuttonbox-invert',
		'organizationswitcherpopoveractionbuttontext-removed',
		'card-changes',
		'alternativemethods-backlink',
		'button-to-organizationlistcreateorganizationactionbutton',
		'remove-socialbuttonsblockbuttonarrow',
		'remove-identitypreview-avatar',
		'organization-getroles-arguments-changed',
		'organization-getdomains-arguments-change',
		'organization-getmembershiprequests-arguments-changed',
		'organization-getmemberships-arguments-changed',
		'organization-getinvitations-arguments-changed',
		'user-getorganizationinvitations-arguments-chanaged',
		'user-getorganizationsuggestions-arguments-chanaged',
		'user-getorganizationmemberships-arguments-chanaged',
		'aftersignouturl-behavior-change',
		'aftersigninurl-behavior-change-2',
		'aftersignupurl-behavior-change',
		'clerk-isready-removed',
		'new-localization-keys',
		'removed-localization-keys',
		'changed-localization-keys',
		'signoutcallback-to-redirecturl',
	]),
	shared: load('shared', [
		'magiclinkerror',
		'ismagiclinkerror',
		'magiclinkerrorcode',
		'usemagiclink',
		'getrequesturl',
		'organizationcontext',
		'useorganizationlist-organizationlist', // shared outside this pkg?
	]),
	chromeExtension: load('chromeExtension', ['clerkprovider-tokencache']),
	localizations: load('localization', [
		'new-localization-keys',
		'removed-localization-keys',
		'changed-localization-keys',
	]),
	backend: load('backend', [
		'api-url-value-changed',
		'verifyjwt-import-path-move',
		'decodejwt-import-path-move',
		'signjwt-import-path-move',
		'constants-import-path-move',
		'redirect-import-path-move',
		'createauthenticaterequest-import-path-move',
		'createisomorphicrequest-import-path-move',
		'createclerkclient-frontendapi',
		'authenticaterequest-params-change',
		'clerk-import',
		'externalaccount-picture',
		'externalaccountjson-avatarurl',
		'organization-logourl',
		'organizationjson-logourl',
		'user-profileimageurl',
		'userjson-profileimageurl',
		'organizationmembershippublicuserdata-profileimageurl',
		'organizationmembershippublicuserdatajson-profileimageurl',
		'clockskewinseconds',
		'pkgversion',
		'client-unstableoptions-removed',
		'httpoptions-removed',
		'createisomorphicrequest-removed',
		'createemail-removed',
		'signjwterror-import-move',
		'tokenverificationerror-import-move',
		'tokenverificationerroraction-import-move',
		'tokenverificationerrorreason-import-move',
		'membershiprole',
		'getorganizationmembershiplist-return-signature',
		'getorganizationlist-return-signature',
		'getorganizationinvitationlist-return-signature',
		'buildrequesturl-removed',
	]),
	types: [],
	redwood: [],
	express: [],
};

function dedupeMerge(arr1, arr2) {
	return [...new Set(arr1.concat(arr2))];
}
