		alert("a");
		var Liferay = Liferay || {};

		Liferay.Browser = {
			acceptsGzip: function() {
				return true;
			},

			

			getMajorVersion: function() {
				return 62.0;
			},

			getRevision: function() {
				return '62.0';
			},
			getVersion: function() {
				return '62.0';
			},

			

			isAir: function() {
				return false;
			},
			isChrome: function() {
				return false;
			},
			isFirefox: function() {
				return true;
			},
			isGecko: function() {
				return true;
			},
			isIe: function() {
				return false;
			},
			isIphone: function() {
				return false;
			},
			isLinux: function() {
				return false;
			},
			isMac: function() {
				return false;
			},
			isMobile: function() {
				return false;
			},
			isMozilla: function() {
				return true;
			},
			isOpera: function() {
				return false;
			},
			isRtf: function() {
				return true;
			},
			isSafari: function() {
				return false;
			},
			isSun: function() {
				return false;
			},
			isWebKit: function() {
				return false;
			},
			isWindows: function() {
				return true;
			}
		};

		Liferay.Data = Liferay.Data || {};

		Liferay.Data.ICONS_INLINE_SVG = true;

		Liferay.Data.NAV_SELECTOR = '#navigation';

		Liferay.Data.NAV_SELECTOR_MOBILE = '#navigationCollapse';

		Liferay.Data.isCustomizationView = function() {
			return false;
		};

		Liferay.Data.notices = [
			null

			

			
		];

		Liferay.PortletKeys = {
			DOCUMENT_LIBRARY: 'com_liferay_document_library_web_portlet_DLPortlet',
			DYNAMIC_DATA_MAPPING: 'com_liferay_dynamic_data_mapping_web_portlet_DDMPortlet',
			ITEM_SELECTOR: 'com_liferay_item_selector_web_portlet_ItemSelectorPortlet'
		};

		Liferay.PropsValues = {
			JAVASCRIPT_SINGLE_PAGE_APPLICATION_TIMEOUT: 0,
			NTLM_AUTH_ENABLED: false,
			UPLOAD_SERVLET_REQUEST_IMPL_MAX_SIZE: 104857600
		};

		Liferay.ThemeDisplay = {
			
				getLayoutId: function() {
					return '1';
				},
				getLayoutRelativeURL: function() {
					return '/web/guest/home';
				},
				getLayoutURL: function() {
					return 'http://localhost:8080/web/guest/home';
				},
				getParentLayoutId: function() {
					return '0';
				},
				isControlPanel: function() {
					return false;
				},
				isPrivateLayout: function() {
					return 'false';
				},
				isVirtualLayout: function() {
					return false;
				},
			

			getBCP47LanguageId: function() {
				return 'pl-PL';
			},
			getCDNBaseURL: function() {
				return 'http://localhost:8080';
			},
			getCDNDynamicResourcesHost: function() {
				return '';
			},
			getCDNHost: function() {
				return '';
			},
			getCompanyGroupId: function() {
				return '20152';
			},
			getCompanyId: function() {
				return '20116';
			},
			getDefaultLanguageId: function() {
				return 'pl_PL';
			},
			getDoAsUserIdEncoded: function() {
				return '';
			},
			getLanguageId: function() {
				return 'pl_PL';
			},
			getParentGroupId: function() {
				return '20143';
			},
			getPathContext: function() {
				return '';
			},
			getPathImage: function() {
				return '/image';
			},
			getPathJavaScript: function() {
				return '/o/frontend-js-web';
			},
			getPathMain: function() {
				return '/c';
			},
			getPathThemeImages: function() {
				return 'http://localhost:8080/o/liferay-zero-theme/images';
			},
			getPathThemeRoot: function() {
				return '/o/liferay-zero-theme';
			},
			getPlid: function() {
				return '20146';
			},
			getPortalURL: function() {
				return 'http://localhost:8080';
			},

			

			getScopeGroupId: function() {
				return '20143';
			},
			getScopeGroupIdOrLiveGroupId: function() {
				return '20143';
			},
			getSessionId: function() {
				return '';
			},
			getSiteAdminURL: function() {
				return 'http://localhost:8080/group/guest/~/control_panel/manage?p_p_lifecycle=0&p_p_state=maximized&p_p_mode=view';
			},
			getSiteGroupId: function() {
				return '20143';
			},
			getURLControlPanel: function() {
				return '/group/control_panel?refererPlid=20146';
			},
			getURLHome: function() {
				return 'http\x3a\x2f\x2flocalhost\x3a8080\x2fweb\x2fguest';
			},
			getUserId: function() {
				return '20156';
			},
			getUserName: function() {
				return '\u004a\u0061\u006e\u0020\u004b\u006f\u0077\u0061\u006c\u0073\u006b\u0069';
			},
			isAddSessionIdToURL: function() {
				return false;
			},
			isFreeformLayout: function() {
				return false;
			},
			isImpersonated: function() {
				return false;
			},
			isSignedIn: function() {
				return true;
			},
			isStateExclusive: function() {
				return false;
			},
			isStateMaximized: function() {
				return false;
			},
			isStatePopUp: function() {
				return false;
			}
		};

		var themeDisplay = Liferay.ThemeDisplay;

		Liferay.AUI = {

			

			getAvailableLangPath: function() {
				return 'available_languages.jsp?browserId=firefox&themeId=liferaytheme_WAR_liferayzerotheme&colorSchemeId=01&languageId=pl_PL&b=7003&t=1539254751308';
			},
			getCombine: function() {
				return false;
			},
			getComboPath: function() {
				return '/combo/?browserId=firefox&minifierType=&languageId=pl_PL&b=7003&t=1539254751308&';
			},
			getDateFormat: function() {
				return '%d/%m/%Y';
			},
			getEditorCKEditorPath: function() {
				return '/o/frontend-editor-ckeditor-web';
			},
			getFilter: function() {
				var filter = 'raw';

				
					

				return filter;
			},
			getFilterConfig: function() {
				var instance = this;

				var filterConfig = null;

				if (!instance.getCombine()) {
					filterConfig = {
						replaceStr: '.js' + instance.getStaticResourceURLParams(),
						searchExp: '\\.js$'
					};
				}

				return filterConfig;
			},
			getJavaScriptRootPath: function() {
				return '/o/frontend-js-web';
			},
			getLangPath: function() {
				return 'aui_lang.jsp?browserId=firefox&themeId=liferaytheme_WAR_liferayzerotheme&colorSchemeId=01&languageId=pl_PL&b=7003&t=1539254751308';
			},
			getPortletRootPath: function() {
				return '/html/portlet';
			},
			getStaticResourceURLParams: function() {
				return '?browserId=firefox&minifierType=&languageId=pl_PL&b=7003&t=1539254751308';
			}
		};

		Liferay.authToken = 'amp6lRLT';

		

		Liferay.currentURL = '\x2fweb\x2fguest\x2fhome\x3fp_p_id\x3deUrzadZarzadzanieSkrytkami_WAR_eurzadportlet\x26p_p_lifecycle\x3d1\x26p_p_state\x3dnormal\x26p_p_mode\x3dview\x26p_p_col_id\x3dcolumn-1\x26p_p_col_count\x3d1\x26_eUrzadZarzadzanieSkrytkami_WAR_eurzadportlet_action\x3dadd\x26p_auth\x3damp6lRLT';
		Liferay.currentURLEncoded = '\x252Fweb\x252Fguest\x252Fhome\x253Fp_p_id\x253DeUrzadZarzadzanieSkrytkami_WAR_eurzadportlet\x2526p_p_lifecycle\x253D1\x2526p_p_state\x253Dnormal\x2526p_p_mode\x253Dview\x2526p_p_col_id\x253Dcolumn-1\x2526p_p_col_count\x253D1\x2526_eUrzadZarzadzanieSkrytkami_WAR_eurzadportlet_action\x253Dadd\x2526p_auth\x253Damp6lRLT';
