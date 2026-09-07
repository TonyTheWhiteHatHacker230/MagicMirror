/* MagicMirror² Configuration File
 * Nightshadow UI HUD Theme Configuration
 * 
 * Target Layout:
 * - Top Center: Nightshadow UI HUD (Title Header)
 * - Top Left: Calendar (日程日历)
 * - Bottom Left: News (最新资讯)
 * - Top Right: Weather (实时天气与预报)
 * - Bottom Right: To-do List (待办清单)
 * - Bottom Bar: CPU / RAM / Temp. / Wi-Fi (系统监控)
 */

let config = {
	address: "0.0.0.0", // 允许局域网访问
	port: 8080,
	basePath: "/",
	ipWhitelist: [], // 允许任意 IP 连接，如需限制可填写特定 IP

	language: "zh-cn",
	locale: "zh-CN",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",

	modules: [
		// ----------------------------------------------------
		// 1. 顶部中央标题 (Nightshadow UI HUD Header)
		// ----------------------------------------------------
		{
			module: "helloworld",
			position: "top_center",
			header: "",
			config: {
				text: "Nightshadow UI HUD"
			}
		},

		// ----------------------------------------------------
		// 2. 左上角：日历模块 (Calendar)
		// ----------------------------------------------------
		{
			module: "calendar",
			header: "日程日历",
			position: "top_left",
			config: {
				maximumEntries: 6,
				maximumNumberOfDays: 14,
				displaySymbol: true,
				defaultSymbol: "calendar-days",
				calendars: [
					{
						symbol: "calendar-check",
						// 默认配置中国节假日日历 iCal 链接，可替换为 Google Calendar 秘密 iCal 链接
						url: "https://calendar.google.com/calendar/ical/zh-cn.china%23holiday%40group.v.calendar.google.com/public/basic.ics"
					}
				]
			}
		},

		// ----------------------------------------------------
		// 3. 左下角：新闻模块 (News)
		// ----------------------------------------------------
		{
			module: "newsfeed",
			position: "bottom_left",
			header: "最新资讯",
			config: {
				feeds: [
					{
						title: "新华网要闻",
						url: "http://www.xinhuanet.com/rss/news_world.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true,
				updateInterval: 10000
			}
		},

		// ----------------------------------------------------
		// 4. 右上角：天气模块 (Weather)
		// ----------------------------------------------------
		{
			module: "weather",
			position: "top_right",
			header: "实时天气",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Beijing",
				locationID: "1816670", // 北京 City ID (可按需修改)
				apiKey: "YOUR_OPENWEATHERMAP_API_KEY", // 请填写您的 OpenWeatherMap API Key
				showHumidity: true,
				showSun: true,
				degreeLabel: true
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Beijing",
				locationID: "1816670",
				apiKey: "YOUR_OPENWEATHERMAP_API_KEY",
				maxNumberOfDays: 5
			}
		},

		// ----------------------------------------------------
		// 5. 右下角：待办事项模块 (To-do List)
		// 优先使用社区常用的 MMM-Todoist；若未安装可替换为普通列表或 default todo
		// ----------------------------------------------------
		{
			module: "MMM-Todoist",
			position: "bottom_right",
			header: "待办清单",
			config: {
				accessToken: "YOUR_TODOIST_API_TOKEN", // 请填写 Todoist Personal API Token
				maximumEntries: 6,
				updateInterval: 60000,
				fade: false,
				showProject: true,
				sortBy: "dueDateAsc"
			}
		},

		// ----------------------------------------------------
		// 6. 底部中央状态条：系统监控 (CPU / RAM / Temp. / Wi-Fi)
		// 推荐使用 MMM-SystemStats 模块
		// ----------------------------------------------------
		{
			module: "MMM-SystemStats",
			position: "bottom_bar",
			header: "",
			config: {
				updateInterval: 10000,
				animationSpeed: 1000,
				align: "center",
				language: "zh-cn",
				useColor: true,
				units: "metric"
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
