// ==UserScript==
// @name         Dokploy 简体中文汉化
// @namespace    https://github.com/dokploy/dokploy
// @version      0.1.21
// @description  汉化 Dokploy v0.30.2 面板，基于官方源码提交 772b76821771c53b072c2fbb95cf8876e1a65ae4
// @author       f3liiix
// @homepageURL  https://github.com/f3liiix/dokploy-zh
// @supportURL   https://github.com/f3liiix/dokploy-zh/issues
// @updateURL    https://raw.githubusercontent.com/f3liiix/dokploy-zh/main/dokploy-zh.user.js
// @downloadURL  https://raw.githubusercontent.com/f3liiix/dokploy-zh/main/dokploy-zh.user.js
// @match        https://*/*
// @run-at       document-idle
// @grant        none
// @noframes
// ==/UserScript==

(() => {
	"use strict";

	if (!location.hostname.toLowerCase().startsWith("d.")) return;

	const EXACT_TRANSLATIONS = new Map([
	[
		"--- No time found ---",
		"--- 未找到时间 ---"
	],
	[
		"— Applications in Dokploy deploy to Swarm by default. Docker Compose projects need to use",
		"— Dokploy 中的应用默认部署到 Swarm。Docker Compose 项目需要使用"
	],
	[
		"— avoid root account credentials.",
		"— 请勿使用根账户凭据"
	],
	[
		"— Check your project's deployment logs for errors.",
		"— 请检查项目的部署日志中是否有错误"
	],
	[
		"— Status:",
		"— 状态："
	],
	[
		", Availability:",
		"，可用性："
	],
	[
		", but the volume of this database is mounted at",
		"，但此数据库的卷挂载在"
	],
	[
		", but there are no application services running in the swarm.",
		"，但 Swarm 中没有正在运行的应用服务"
	],
	[
		", but this server has been disabled because your current plan doesn't include enough servers. Please purchase more servers to regain access to this application.",
		"上，但由于当前套餐包含的服务器数量不足，该服务器已被禁用。请购买更多服务器以恢复对此应用的访问"
	],
	[
		"? This action cannot be undone.",
		"吗？此操作无法撤销"
	],
	[
		". A network stuck near 100% blocks new containers from starting even when the host has plenty of other resources free.",
		"。即使主机还有大量其他可用资源，接近 100% 占用的网络也会导致新容器无法启动"
	],
	[
		". Changing the image does not migrate existing data — Postgres may crash-loop or start with an empty database. Adjust the volume mount path in the Volumes section or keep a compatible image before saving.",
		"。更改镜像不会迁移现有数据——Postgres 可能会反复崩溃重启，或以空数据库启动。保存前，请在“卷”部分调整卷挂载路径，或继续使用兼容的镜像"
	],
	[
		". Containers running on worker nodes will show “--” for metrics.",
		"收集。在工作节点上运行的容器，其指标将显示为“--”"
	],
	[
		". If the container is running, it will be forcefully stopped and removed. This action cannot be undone.",
		"。如果容器正在运行，将被强制停止并删除。此操作无法撤销"
	],
	[
		". Secrets are fetched at deploy time and never stored in Dokploy.",
		"。密钥会在部署时获取，绝不会存储在 Dokploy 中"
	],
	[
		". Standalone or Docker Compose containers won't appear here.",
		"的容器。独立容器或 Docker Compose 容器不会显示在此处"
	],
	[
		". This registry will be available on this server.",
		"上执行。此镜像仓库将在该服务器上可用"
	],
	[
		". You can also reference secrets from a configured vault provider:",
		"。你也可以引用已配置的密钥保管库提供商中的密钥："
	],
	[
		"\"? This action cannot be undone and will also delete all services in this environment.",
		"”吗？此操作无法撤销，并且还会删除此环境中的所有服务"
	],
	[
		"“The Open Source alternative to Netlify, Vercel, Heroku.”",
		"“Netlify、Vercel、Heroku 的开源替代方案”"
	],
	[
		"\"web\" and/or \"websecure\" is used by default.",
		"默认使用“web”和/或“websecure”"
	],
	[
		"(Auto-renewal enabled)",
		"（已启用自动续期）"
	],
	[
		"(Expired)",
		"（已过期）"
	],
	[
		"(for multi-node setups) — Worker nodes need to pull images from a shared registry. Configure one in",
		"（适用于多节点配置）— 工作节点需要从共享镜像仓库拉取镜像。请在以下位置配置："
	],
	[
		"(metrics refresh every 5s)",
		"（指标每 5 秒刷新一次）"
	],
	[
		"(optional)",
		"（可选）"
	],
	[
		"(Optional)",
		"（可选）"
	],
	[
		"(You have unsaved changes)",
		"（有未保存的更改）"
	],
	[
		"(You)",
		"（你）"
	],
	[
		") — not certificate or private key content. To use a certificate you pasted in the Certificates section, choose",
		"）——不是证书或私钥内容。若要使用粘贴到“证书”部分的证书，请改选"
	],
	[
		") to run as Swarm services.",
		"）才能作为 Swarm 服务运行"
	],
	[
		"). Configs using templates will fail standard YAML validation. Check this to save without validation.",
		"）。使用模板的配置无法通过标准 YAML 校验。勾选此项可跳过校验并保存"
	],
	[
		"⚠️ Important: URL Change Impact",
		"⚠️ 重要：URL 变更的影响"
	],
	[
		"⚠️ The container will be temporarily stopped during backup to prevent file corruption. This ensures data integrity but may cause temporary service interruption.",
		"⚠️ 备份期间将暂时停止容器，以防止文件损坏。这可以确保数据完整性，但可能导致服务暂时中断"
	],
	[
		"✏️ Manual (Custom Version)",
		"✏️ 手动（自定义版本）"
	],
	[
		"1 day",
		"1 天"
	],
	[
		"1 hour",
		"1 小时"
	],
	[
		"1 minute",
		"1 分钟"
	],
	[
		"1 user",
		"1 个用户"
	],
	[
		"1 year",
		"1 年"
	],
	[
		"1. Add A Record",
		"1. 添加 A 记录"
	],
	[
		"1. Add the public SSH Key when you create a server in your preferred provider (Hostinger, Digital Ocean, Hetzner, etc)",
		"1. 在您选择的提供商（Hostinger、Digital Ocean、Hetzner 等）处创建服务器时添加 SSH 公钥"
	],
	[
		"1. Go to your new server and run the following command",
		"1. 前往新服务器并运行以下命令"
	],
	[
		"1. Login to your server",
		"1. 登录你的服务器"
	],
	[
		"1. The container was recently started - wait a few minutes for data to be collected",
		"1. 容器刚刚启动——请等待几分钟以收集数据"
	],
	[
		"1. You don't have setup the monitoring service, you can do in web server section.",
		"1. 尚未设置监控服务，可在 Web 服务器部分进行设置"
	],
	[
		"100 lines",
		"100 行"
	],
	[
		"1000 lines",
		"1000 行"
	],
	[
		"12 hours",
		"12 小时"
	],
	[
		"15 minutes",
		"15 分钟"
	],
	[
		"2. Add The SSH Key to Server Manually",
		"2. 手动将 SSH 密钥添加到服务器"
	],
	[
		"2. If you already have setup the monitoring service, wait a few minutes and refresh the page.",
		"2. 如果已设置监控服务，请等待几分钟后刷新页面"
	],
	[
		"2. Run the following command to add the node(manager) to your cluster",
		"2. 运行以下命令，将管理节点添加到集群"
	],
	[
		"2. Run the following command to add the node(worker) to your cluster",
		"2. 运行以下命令，将工作节点添加到集群"
	],
	[
		"2. The container is not running - verify its status",
		"2. 容器未运行——请检查其状态"
	],
	[
		"2. Verify Configuration",
		"2. 验证配置"
	],
	[
		"2. When you are logged in run the following command",
		"2. 登录后运行以下命令"
	],
	[
		"20% off",
		"优惠 20%"
	],
	[
		"2FA Code",
		"2FA 验证码"
	],
	[
		"2FA Configuration",
		"2FA 配置"
	],
	[
		"2FA configured successfully",
		"2FA 配置成功"
	],
	[
		"2FA disabled successfully",
		"已成功禁用 2FA"
	],
	[
		"2FA QR Code",
		"2FA 二维码"
	],
	[
		"2FA Setup",
		"2FA 设置"
	],
	[
		"3. The service is not included in your monitoring configuration",
		"3. 此服务未包含在监控配置中"
	],
	[
		"3. You're done, follow the next step to insert the details of your server.",
		"3. 操作完成，请继续下一步并填写服务器详细信息"
	],
	[
		"3. You're done, you can test the connection by entering to the terminal or by setting up the server tab.",
		"3. 操作完成。你可以进入终端或在服务器选项卡中完成设置，以测试连接"
	],
	[
		"30 days",
		"30 天"
	],
	[
		"30 minutes",
		"30 分钟"
	],
	[
		"300 lines",
		"300 行"
	],
	[
		"5 minutes",
		"5 分钟"
	],
	[
		"500 lines",
		"500 行"
	],
	[
		"5000 lines",
		"5000 行"
	],
	[
		"6 hours",
		"6 小时"
	],
	[
		"7 days",
		"7 天"
	],
	[
		"90 days",
		"90 天"
	],
	[
		"A descriptive name for your scheduled task",
		"为定时任务输入一个描述性名称"
	],
	[
		"A list of your managers / workers.",
		"管理节点和工作节点列表"
	],
	[
		"A name to identify this configuration",
		"用于标识此配置的名称"
	],
	[
		"A new version of the server software is available. Consider updating if you:",
		"服务器软件有新版本可用。如果存在以下情况，建议更新："
	],
	[
		"A quick preview of how your branding changes will look.",
		"快速预览品牌设置更改后的效果"
	],
	[
		"a schedule to run a task at a specific time or interval.",
		"定时任务，以便在指定时间或间隔运行任务"
	],
	[
		"A SCIM provider with this ID already exists",
		"已存在使用此 ID 的 SCIM 提供商"
	],
	[
		"a server to deploy your applications remotely.",
		"服务器，以便远程部署您的应用"
	],
	[
		"A tag with this name already exists in your organization",
		"您的组织中已存在同名标签"
	],
	[
		"Accept Invitation",
		"接受邀请"
	],
	[
		"Access",
		"访问权限"
	],
	[
		"Access denied",
		"访问被拒绝"
	],
	[
		"Access Key Id",
		"访问密钥 ID"
	],
	[
		"Access Key ID",
		"访问密钥 ID"
	],
	[
		"Access Key Id is required",
		"必须填写访问密钥 ID"
	],
	[
		"Access Key ID is required",
		"访问密钥 ID 为必填项"
	],
	[
		"Access to API keys and CLI usage",
		"访问 API 密钥并使用 CLI"
	],
	[
		"Access to API/CLI",
		"访问 API/CLI"
	],
	[
		"Access to Docker",
		"访问 Docker"
	],
	[
		"Access to Docker containers, images, and volumes management",
		"访问 Docker 容器、镜像和卷管理功能"
	],
	[
		"Access to Git Providers",
		"访问 Git 提供商"
	],
	[
		"Access to Git providers (GitHub, GitLab, Bitbucket, Gitea)",
		"访问 Git 提供商（GitHub、GitLab、Bitbucket、Gitea）"
	],
	[
		"Access to SSH Keys",
		"访问 SSH 密钥"
	],
	[
		"Access to the Traefik file system configuration",
		"访问 Traefik 文件系统配置"
	],
	[
		"Access to Traefik Files",
		"访问 Traefik 文件"
	],
	[
		"Access Token",
		"访问令牌"
	],
	[
		"Access was denied by the identity provider.",
		"身份提供商拒绝了访问请求"
	],
	[
		"Account",
		"账户"
	],
	[
		"Account created successfully",
		"账户创建成功"
	],
	[
		"Account unlinked",
		"已取消关联账户"
	],
	[
		"Across",
		"共"
	],
	[
		"Action",
		"操作"
	],
	[
		"Action on rollback failure",
		"回滚失败时执行的操作"
	],
	[
		"Action on update failure",
		"更新失败时执行的操作"
	],
	[
		"Action Required",
		"需要操作"
	],
	[
		"Actions",
		"操作"
	],
	[
		"Activate",
		"启用"
	],
	[
		"Activate Requests",
		"启用请求日志"
	],
	[
		"Activate requests to see incoming traffic statistics and monitor your application's usage. After activation, you'll need to reload Traefik for the changes to take effect.",
		"启用请求日志后，即可查看传入流量统计信息并监控应用使用情况。启用后，你需要重新加载 Traefik 才能使更改生效"
	],
	[
		"Active",
		"已启用"
	],
	[
		"Active (Recommended)",
		"已启用（推荐）"
	],
	[
		"Active Nodes",
		"活跃节点"
	],
	[
		"Active organization is required",
		"必须指定当前组织"
	],
	[
		"Active Since",
		"活跃起始时间"
	],
	[
		"Add",
		"添加"
	],
	[
		"Add a",
		"添加"
	],
	[
		"Add a domain to your server application.",
		"为服务器应用添加域名"
	],
	[
		"Add a hostname",
		"请添加主机名"
	],
	[
		"Add a labels that will trigger a preview deployment for a pull request. If no labels are specified, all pull requests will trigger a preview deployment.",
		"添加可触发拉取请求预览部署的标签。如果未指定标签，则所有拉取请求都会触发预览部署"
	],
	[
		"Add a new backup",
		"添加新备份"
	],
	[
		"Add a new manager",
		"添加新的管理节点"
	],
	[
		"Add a new worker",
		"添加新的工作节点"
	],
	[
		"Add a photo studio portfolio",
		"添加摄影工作室作品集"
	],
	[
		"Add a SAML 2.0 identity provider (e.g. Okta SAML, Azure AD SAML, OneLogin). You need the IdP's SSO URL and signing certificate.",
		"添加 SAML 2.0 身份提供商（例如 Okta SAML、Azure AD SAML、OneLogin）。你需要 IdP 的 SSO URL 和签名证书"
	],
	[
		"Add AI",
		"添加 AI 配置"
	],
	[
		"Add an external registry",
		"添加外部镜像仓库"
	],
	[
		"Add an OIDC or SAML provider so users can sign in with their organization's IdP (e.g. Okta, Azure AD).",
		"添加 OIDC 或 SAML 提供商，让用户可通过其组织的 IdP（例如 Okta、Azure AD）登录"
	],
	[
		"Add and edit notification providers",
		"添加和编辑通知提供商"
	],
	[
		"Add and edit S3 destinations",
		"添加和编辑 S3 存储"
	],
	[
		"Add and edit volumes and mounts",
		"添加和编辑卷及挂载"
	],
	[
		"Add any OIDC-compliant identity provider (e.g. Okta, Azure AD, Google Workspace, Auth0, Keycloak). Discovery will fill endpoints from the issuer URL when possible.",
		"添加任何兼容 OIDC 的身份提供商（例如 Okta、Azure AD、Google Workspace、Auth0、Keycloak）。如可用，将通过颁发者 URL 自动发现并填充端点"
	],
	[
		"Add Argument",
		"添加参数"
	],
	[
		"Add backups to your database to save the data to a different provider.",
		"为数据库添加备份，将数据保存到其他提供商"
	],
	[
		"Add basic auth to your application",
		"为应用添加基本身份验证"
	],
	[
		"Add Certificate",
		"添加证书"
	],
	[
		"Add Command",
		"添加命令"
	],
	[
		"Add Constraint",
		"添加约束"
	],
	[
		"Add Destination",
		"添加存储目标"
	],
	[
		"Add DNS Provider",
		"添加 DNS 提供商"
	],
	[
		"Add domain",
		"添加域名"
	],
	[
		"Add Domain",
		"添加域名"
	],
	[
		"Add driver option",
		"添加驱动选项"
	],
	[
		"Add environment variables",
		"添加环境变量"
	],
	[
		"Add environment variables from a file",
		"从文件添加环境变量"
	],
	[
		"Add file patches to modify your repo before each build—configs, env, or code. Create your first patch to get started.",
		"添加文件补丁，以便在每次构建前修改仓库中的配置、环境文件或代码。创建第一个补丁即可开始"
	],
	[
		"Add Flag",
		"添加参数"
	],
	[
		"Add header",
		"添加请求头"
	],
	[
		"Add Invitation",
		"添加邀请"
	],
	[
		"Add IPAM config",
		"添加 IPAM 配置"
	],
	[
		"Add key-value labels to your service",
		"为服务添加键值对标签"
	],
	[
		"Add Label",
		"添加标签"
	],
	[
		"Add Mapping",
		"添加映射"
	],
	[
		"Add metadata to services using labels. Labels are key-value pairs (e.g., com.example.foo=bar) for organizing and filtering services.",
		"使用标签为服务添加元数据。标签是用于组织和筛选服务的键值对（例如 com.example.foo=bar）"
	],
	[
		"Add more servers as you'd like for",
		"可按需添加更多服务器，价格为"
	],
	[
		"Add more servers, switch between Hobby and Startup, or change to annual billing (20% off). Stripe will prorate the change.",
		"添加更多服务器、在 Hobby 和 Startup 之间切换，或改为按年计费（优惠 20%）。Stripe 将按比例计算变更费用"
	],
	[
		"Add network",
		"添加网络"
	],
	[
		"Add Network",
		"添加网络"
	],
	[
		"Add New",
		"新增"
	],
	[
		"Add new Docker registries",
		"添加新的 Docker 镜像仓库"
	],
	[
		"Add new remote servers",
		"添加新的远程服务器"
	],
	[
		"Add Node",
		"添加节点"
	],
	[
		"Add nodes to your cluster",
		"向集群添加节点"
	],
	[
		"Add Notification",
		"添加通知"
	],
	[
		"Add OIDC provider",
		"添加 OIDC 提供商"
	],
	[
		"Add one to get started",
		"添加一个映射以开始使用"
	],
	[
		"Add or remove additional ports for Traefik",
		"添加或删除 Traefik 的额外端口"
	],
	[
		"Add or remove permissions",
		"添加或移除权限"
	],
	[
		"Add organization",
		"添加组织"
	],
	[
		"Add Passkey",
		"添加通行密钥"
	],
	[
		"Add paths to watch for changes. When files in these paths change, a new deployment will be triggered.",
		"添加需要监视的路径。当这些路径中的文件发生变化时，将触发新的部署"
	],
	[
		"Add paths to watch for changes. When files in these paths change, a new deployment will be triggered. This will work only when manual webhook is setup.",
		"添加需要监视的路径。当这些路径中的文件发生变化时，将触发新的部署。此功能仅在已设置手动 Webhook 时生效"
	],
	[
		"Add Permissions",
		"添加权限"
	],
	[
		"Add Platform",
		"添加平台"
	],
	[
		"Add Port",
		"添加端口"
	],
	[
		"Add Preference",
		"添加偏好设置"
	],
	[
		"Add Provider",
		"添加提供商"
	],
	[
		"Add Record",
		"添加记录"
	],
	[
		"Add Redirect",
		"添加重定向"
	],
	[
		"Add Registry",
		"添加镜像仓库"
	],
	[
		"Add SAML provider",
		"添加 SAML 提供商"
	],
	[
		"Add Schedule",
		"添加定时任务"
	],
	[
		"Add scope",
		"添加作用域"
	],
	[
		"Add Security",
		"添加安全设置"
	],
	[
		"Add Server",
		"添加服务器"
	],
	[
		"Add servers to deploy your applications remotely.",
		"添加服务器，以便远程部署应用"
	],
	[
		"Add Service",
		"添加服务"
	],
	[
		"Add SSH Key",
		"添加 SSH 密钥"
	],
	[
		"Add SSH Key to Server Manually",
		"手动将 SSH 密钥添加到服务器"
	],
	[
		"Add SSH Key when creating server in your provider",
		"通过提供商创建服务器时添加 SSH 密钥"
	],
	[
		"Add Traefik middleware references. Middlewares must be defined in your Traefik configuration.",
		"添加 Traefik 中间件引用。中间件必须已在 Traefik 配置中定义"
	],
	[
		"Add trusted origin",
		"添加可信源"
	],
	[
		"Add Ulimit",
		"添加 Ulimit"
	],
	[
		"Add Variable",
		"添加变量"
	],
	[
		"Add Vault Provider",
		"添加 Vault 提供商"
	],
	[
		"Add Volume",
		"添加卷"
	],
	[
		"Add Volume Backup",
		"添加卷备份"
	],
	[
		"Add your providers like AWS S3, Cloudflare R2, Wasabi, DigitalOcean Spaces etc.",
		"添加 AWS S3、Cloudflare R2、Wasabi、DigitalOcean Spaces 等提供商"
	],
	[
		"Add your providers to receive notifications, like Discord, Slack, Telegram, Teams, Email, Resend, Lark.",
		"添加提供商以接收通知，例如 Discord、Slack、Telegram、Teams、邮箱、Resend、Lark"
	],
	[
		"Add your users to your Dokploy account.",
		"将用户添加到你的 Dokploy 账户"
	],
	[
		"Added",
		"加入时间"
	],
	[
		"Added to bookmarks",
		"已添加到书签"
	],
	[
		"Adding invalid configuration to existing files, can break your Traefik instance, preventing access to your applications.",
		"向现有文件添加无效配置可能导致 Traefik 实例故障，使应用无法访问"
	],
	[
		"Additional Flags (Optional)",
		"附加参数（可选）"
	],
	[
		"Additional Port Mappings",
		"其他端口映射"
	],
	[
		"Adjust the settings for preview deployments of this application, including environment variables, build options, and deployment rules.",
		"调整此应用的预览部署设置，包括环境变量、构建选项和部署规则"
	],
	[
		"Admin",
		"管理员"
	],
	[
		"Admin:",
		"管理员："
	],
	[
		"Admins cannot delete themselves. Ask the owner or another admin.",
		"管理员不能删除自己。请联系所有者或其他管理员"
	],
	[
		"Advanced",
		"高级"
	],
	[
		"Advanced Settings",
		"高级设置"
	],
	[
		"After configuring your DNS records:",
		"配置 DNS 记录后："
	],
	[
		"After creating, you'll receive an Application ID and Secret, copy them and paste them below.",
		"创建后，您将获得应用 ID 和密钥，请复制并粘贴到下方"
	],
	[
		"After creating, you'll receive an ID and Secret, copy them and paste them below.",
		"创建后，你将获得 ID 和密钥，请复制并粘贴到下方"
	],
	[
		"Aggressive Mode (Recommended)",
		"激进模式（推荐）"
	],
	[
		"AI Assistant",
		"AI 助手"
	],
	[
		"AI deleted successfully",
		"AI 配置删除成功"
	],
	[
		"AI features are not enabled",
		"AI 功能未启用"
	],
	[
		"AI is processing your request",
		"AI 正在处理你的请求"
	],
	[
		"AI provider is not enabled",
		"AI 提供商未启用"
	],
	[
		"AI sandbox",
		"AI 沙盒"
	],
	[
		"AI Settings",
		"AI 设置"
	],
	[
		"AI settings saved successfully",
		"AI 设置保存成功"
	],
	[
		"Alert when CPU usage exceeds this percentage",
		"CPU 使用率超过此百分比时发出警报"
	],
	[
		"Alert when memory usage exceeds this percentage",
		"内存使用率超过此百分比时发出警报"
	],
	[
		"Aliases",
		"别名"
	],
	[
		"Aliases (optional)",
		"别名（可选）"
	],
	[
		"All",
		"全部"
	],
	[
		"All actions",
		"所有操作"
	],
	[
		"All application and compose deployments in one place.",
		"集中查看所有应用和 Compose 部署"
	],
	[
		"All destinations",
		"所有存储目标"
	],
	[
		"All drivers",
		"所有驱动程序"
	],
	[
		"All environments",
		"所有环境"
	],
	[
		"All necessary configurations are handled through environment variables.",
		"所有必要配置均通过环境变量处理"
	],
	[
		"All networks exist in Docker",
		"所有网络均存在于 Docker 中"
	],
	[
		"All ports",
		"所有端口"
	],
	[
		"All ports are bound directly to the host machine, allowing Traefik to handle incoming traffic and route it appropriately to your services.",
		"所有端口都直接绑定到主机，使 Traefik 能够处理传入流量并将其正确路由到相应服务"
	],
	[
		"All projects",
		"所有项目"
	],
	[
		"All resources",
		"所有资源"
	],
	[
		"All Running",
		"全部运行中"
	],
	[
		"All servers",
		"所有服务器"
	],
	[
		"All services",
		"所有服务"
	],
	[
		"All services are running. You can proceed with the update.",
		"所有服务均在运行，可以继续更新"
	],
	[
		"All states",
		"所有状态"
	],
	[
		"All statuses",
		"所有状态"
	],
	[
		"All the features of Hobby, plus…",
		"包含 Hobby 的所有功能，以及…"
	],
	[
		"All the features of Startup, plus…",
		"包含 Startup 的所有功能，以及…"
	],
	[
		"All time",
		"全部时间"
	],
	[
		"All types",
		"所有类型"
	],
	[
		"All users",
		"所有用户"
	],
	[
		"Allow Impersonation",
		"允许模拟登录"
	],
	[
		"Allow rolling back to previous deployments",
		"允许回滚到之前的部署"
	],
	[
		"Allow standalone containers to attach (overlay networks only).",
		"允许独立容器连接（仅限 overlay 网络）"
	],
	[
		"Allow the user to access to the API/CLI",
		"允许用户访问 API/CLI"
	],
	[
		"Allow the user to access to the Docker Tab",
		"允许用户访问 Docker 选项卡"
	],
	[
		"Allow the user to access to the Traefik Tab Files",
		"允许用户访问 Traefik 的“文件”选项卡"
	],
	[
		"Allow the user to create environments",
		"允许用户创建环境"
	],
	[
		"Allow the user to create projects",
		"允许用户创建项目"
	],
	[
		"Allow the user to create services",
		"允许用户创建服务"
	],
	[
		"Allow the user to delete environments",
		"允许用户删除环境"
	],
	[
		"Allow the user to delete projects",
		"允许用户删除项目"
	],
	[
		"Allow the user to delete services",
		"允许用户删除服务"
	],
	[
		"Allow to users to access to the Git Providers section",
		"允许用户访问 Git 提供商部分"
	],
	[
		"Allow to users to access to the SSH Keys section",
		"允许用户访问 SSH 密钥部分"
	],
	[
		"Allows you to serve a single directory via NGINX after the build phase. Useful if the final build assets should be served as a static site.",
		"允许在构建阶段结束后通过 NGINX 提供单个目录的内容。适用于将最终构建产物作为静态站点提供"
	],
	[
		"Allows you to target a specific stage in a Multi-stage Dockerfile. If empty, Docker defaults to build the last defined stage.",
		"可指定多阶段 Dockerfile 中的特定阶段。如果留空，Docker 默认构建最后定义的阶段"
	],
	[
		"Already have account?",
		"已有账户？"
	],
	[
		"American Cloud - Get $20 Credits",
		"American Cloud - 获取 20 美元赠金"
	],
	[
		"Amount",
		"金额"
	],
	[
		"Amount to refill",
		"补充数量"
	],
	[
		"An error occurred",
		"发生错误"
	],
	[
		"An error occurred while checking for updates, please try again.",
		"检查更新时出错，请重试"
	],
	[
		"An error occurred while creating your account",
		"创建账户时发生错误"
	],
	[
		"An error occurred while logging in",
		"登录时发生错误"
	],
	[
		"An error occurred while signing in with GitHub",
		"使用 GitHub 登录时发生错误"
	],
	[
		"An error occurred while signing in with Google",
		"使用 Google 登录时发生错误"
	],
	[
		"An error occurred while signing in with passkey",
		"使用通行密钥登录时发生错误"
	],
	[
		"An error occurred while updating the server, please try again.",
		"更新服务器时出错，请重试"
	],
	[
		"An error occurred while verifying 2FA code",
		"验证 2FA 验证码时发生错误"
	],
	[
		"An error occurred while verifying backup code",
		"验证备用码时发生错误"
	],
	[
		"An invitation has already been sent to this email",
		"已向此邮箱发送过邀请"
	],
	[
		"An unexpected error occurred while processing the YAML.",
		"处理 YAML 时发生意外错误"
	],
	[
		"An unknown error occurred",
		"发生未知错误"
	],
	[
		"An unknown error occurred.",
		"发生未知错误"
	],
	[
		"Analysis failed",
		"分析失败"
	],
	[
		"Analyze",
		"分析"
	],
	[
		"Analyze logs with AI",
		"使用 AI 分析日志"
	],
	[
		"Analyzing...",
		"正在分析..."
	],
	[
		"and all its contents",
		"及其所有内容"
	],
	[
		"Annual (20% off)",
		"按年（优惠 20%）"
	],
	[
		"Any",
		"任何情况"
	],
	[
		"Any stack",
		"支持任意技术栈"
	],
	[
		"Anyone in your team can deploy simply and securely in a safe, governed environment.",
		"团队中的任何人都能在安全、受管控的环境中轻松可靠地进行部署"
	],
	[
		"API & CLI",
		"API 与 CLI"
	],
	[
		"API Access",
		"API 访问"
	],
	[
		"API Key",
		"API 密钥"
	],
	[
		"API key authentication",
		"API 密钥认证"
	],
	[
		"API key copied to clipboard",
		"API 密钥已复制到剪贴板"
	],
	[
		"API key deleted successfully",
		"API 密钥删除成功"
	],
	[
		"API Key Generated Successfully",
		"API 密钥生成成功"
	],
	[
		"API Key is required",
		"API 密钥为必填项"
	],
	[
		"API key must contain at least 1 character(s)",
		"API 密钥必须至少包含 1 个字符"
	],
	[
		"API key not found",
		"未找到 API 密钥"
	],
	[
		"API Token",
		"API 令牌"
	],
	[
		"API Token (Recommended)",
		"API 令牌（推荐）"
	],
	[
		"API Token is required",
		"必须填写 API 令牌"
	],
	[
		"API/CLI Keys",
		"API/CLI 密钥"
	],
	[
		"App Build Error",
		"应用构建错误"
	],
	[
		"App Deploy",
		"应用部署"
	],
	[
		"App Name",
		"应用名称"
	],
	[
		"App name is required",
		"应用名称为必填项"
	],
	[
		"App Name is required",
		"应用名称为必填项"
	],
	[
		"App Password (Legacy - will be deprecated June 2026)",
		"应用密码（旧版，将于 2026 年 6 月弃用）"
	],
	[
		"App Registration with the \"Key Vault Secrets User\" role on the vault. Reference format:",
		"在 Vault 上具有“Key Vault Secrets User”角色的应用注册。引用格式："
	],
	[
		"App Token",
		"应用令牌"
	],
	[
		"App Token is required",
		"应用令牌为必填项"
	],
	[
		"appear in the build deployment logs. Check the",
		"显示在构建部署日志中。请查看"
	],
	[
		"Appearance",
		"外观"
	],
	[
		"Application",
		"应用"
	],
	[
		"Application Authentication",
		"应用认证"
	],
	[
		"Application deployed successfully",
		"应用部署成功"
	],
	[
		"Application Description",
		"应用描述"
	],
	[
		"Application Docker Image Name Not Found",
		"未找到应用的 Docker 镜像名称"
	],
	[
		"Application Docker Tag Not Found",
		"未找到应用的 Docker 标签"
	],
	[
		"Application ID",
		"应用 ID"
	],
	[
		"Application ID is required",
		"应用 ID 为必填项"
	],
	[
		"Application Name",
		"应用名称"
	],
	[
		"Application Not Found",
		"未找到应用"
	],
	[
		"Application rebuilt successfully",
		"应用重新构建成功"
	],
	[
		"Application reloaded successfully",
		"应用已成功重新加载"
	],
	[
		"Application Secret",
		"应用密钥"
	],
	[
		"Application Secret is required",
		"应用密钥为必填项"
	],
	[
		"Application services.",
		"个应用服务"
	],
	[
		"Application started successfully",
		"应用启动成功"
	],
	[
		"Application stopped successfully",
		"应用停止成功"
	],
	[
		"Application updated successfully",
		"应用更新成功"
	],
	[
		"Application:",
		"应用："
	],
	[
		"Applications / Services",
		"应用 / 服务"
	],
	[
		"Apply code patches to your repository during build. Patches are applied after cloning the repository and before building.",
		"在构建期间将代码补丁应用到仓库。补丁会在克隆仓库后、构建前应用"
	],
	[
		"Apply Randomize",
		"应用随机化"
	],
	[
		"Apply randomize to the compose file.",
		"对 Compose 文件应用随机化"
	],
	[
		"Apps Deployed",
		"应用已部署"
	],
	[
		"Architecture",
		"架构"
	],
	[
		"Are experiencing issues that may be resolved in the new version",
		"遇到的问题可能已在新版本中解决"
	],
	[
		"Are you absolutely sure?",
		"确定要继续吗？"
	],
	[
		"Are you sure to cancel the incoming deployments?",
		"确定要取消即将执行的部署吗？"
	],
	[
		"Are you sure to delete this project?",
		"确定要删除此项目吗？"
	],
	[
		"Are you sure to kill the build?",
		"确定要终止构建吗？"
	],
	[
		"Are you sure you want to",
		"确定要"
	],
	[
		"Are you sure you want to accept this invitation?",
		"确定要接受此邀请吗？"
	],
	[
		"Are you sure you want to clear old deployments?",
		"确定要清理旧部署吗？"
	],
	[
		"Are you sure you want to close the terminal?",
		"确定要关闭终端吗？"
	],
	[
		"Are you sure you want to deactivate this license key? This will disable enterprise features.",
		"确定要停用此许可证密钥吗？这将禁用企业功能"
	],
	[
		"Are you sure you want to delete",
		"确定要删除"
	],
	[
		"Are you sure you want to delete the",
		"确定要删除"
	],
	[
		"Are you sure you want to delete the environment \"",
		"确定要删除环境“"
	],
	[
		"Are you sure you want to delete this AI?",
		"确定要删除此 AI 配置吗？"
	],
	[
		"Are you sure you want to delete this API key? This action cannot be undone.",
		"确定要删除此 API 密钥吗？此操作无法撤销"
	],
	[
		"Are you sure you want to delete this backup?",
		"确定要删除此备份吗？"
	],
	[
		"Are you sure you want to delete this certificate?",
		"确定要删除此证书吗？"
	],
	[
		"Are you sure you want to delete this deployment? This action cannot be undone.",
		"确定要删除此部署吗？此操作无法撤销"
	],
	[
		"Are you sure you want to delete this destination?",
		"确定要删除此存储目标吗？"
	],
	[
		"Are you sure you want to delete this domain?",
		"确定要删除此域名吗？"
	],
	[
		"Are you sure you want to delete this Git Provider?",
		"确定要删除此 Git 提供商吗？"
	],
	[
		"Are you sure you want to delete this node from the cluster?",
		"确定要从集群中删除此节点吗？"
	],
	[
		"Are you sure you want to delete this notification?",
		"确定要删除此通知吗？"
	],
	[
		"Are you sure you want to delete this organization?",
		"确定要删除此组织吗？"
	],
	[
		"Are you sure you want to delete this port?",
		"确定要删除此端口吗？"
	],
	[
		"Are you sure you want to delete this preview?",
		"确定要删除此预览吗？"
	],
	[
		"Are you sure you want to delete this redirect?",
		"确定要删除此重定向吗？"
	],
	[
		"Are you sure you want to delete this registry configuration?",
		"确定要删除此镜像仓库配置吗？"
	],
	[
		"Are you sure you want to delete this schedule?",
		"确定要删除此定时任务吗？"
	],
	[
		"Are you sure you want to delete this security?",
		"确定要删除此安全设置吗？"
	],
	[
		"Are you sure you want to delete this SSH Key?",
		"确定要删除此 SSH 密钥吗？"
	],
	[
		"Are you sure you want to delete this user?",
		"确定要删除此用户吗？"
	],
	[
		"Are you sure you want to delete this volume backup?",
		"确定要删除此卷备份吗？"
	],
	[
		"Are you sure you want to delete this volume?",
		"确定要删除此卷吗？"
	],
	[
		"Are you sure you want to deploy this application?",
		"确定要部署此应用吗？"
	],
	[
		"Are you sure you want to deploy this compose?",
		"确定要部署此 Compose 吗？"
	],
	[
		"Are you sure you want to deploy this Libsql?",
		"确定要部署此 Libsql 吗？"
	],
	[
		"Are you sure you want to deploy this mariadb?",
		"确定要部署此 MariaDB 吗？"
	],
	[
		"Are you sure you want to deploy this mongo?",
		"确定要部署此 MongoDB 吗？"
	],
	[
		"Are you sure you want to deploy this mysql?",
		"确定要部署此 MySQL 吗？"
	],
	[
		"Are you sure you want to deploy this postgres?",
		"确定要部署此 PostgreSQL 数据库吗？"
	],
	[
		"Are you sure you want to deploy this redis?",
		"确定要部署此 Redis 吗？"
	],
	[
		"Are you sure you want to disconnect this repository?",
		"确定要断开此仓库的连接吗？"
	],
	[
		"Are you sure you want to kill the process?",
		"确定要终止此进程吗？"
	],
	[
		"Are you sure you want to rebuild this application?",
		"确定要重新构建此应用吗？"
	],
	[
		"Are you sure you want to rebuild this compose?",
		"确定要重新构建此 Compose 吗？"
	],
	[
		"Are you sure you want to rebuild this preview deployment?",
		"确定要重新构建此预览部署吗？"
	],
	[
		"Are you sure you want to reload this application?",
		"确定要重新加载此应用吗？"
	],
	[
		"Are you sure you want to reload this libsql?",
		"确定要重新加载此 Libsql 吗？"
	],
	[
		"Are you sure you want to reload this mariadb?",
		"确定要重新加载此 MariaDB 吗？"
	],
	[
		"Are you sure you want to reload this mongo?",
		"确定要重新加载此 MongoDB 吗？"
	],
	[
		"Are you sure you want to reload this mysql?",
		"确定要重新加载此 MySQL 吗？"
	],
	[
		"Are you sure you want to reload this postgres?",
		"确定要重新加载此 PostgreSQL 数据库吗？"
	],
	[
		"Are you sure you want to reload this redis?",
		"确定要重新加载此 Redis 吗？"
	],
	[
		"Are you sure you want to reset all whitelabeling settings to their defaults? This action cannot be undone.",
		"确定要将所有白标设置重置为默认值吗？此操作无法撤销"
	],
	[
		"Are you sure you want to rollback to this deployment?",
		"确定要回滚到此次部署吗？"
	],
	[
		"Are you sure you want to start this application?",
		"确定要启动此应用吗？"
	],
	[
		"Are you sure you want to start this compose?",
		"确定要启动此 Compose 吗？"
	],
	[
		"Are you sure you want to start this Libsql?",
		"确定要启动此 Libsql 吗？"
	],
	[
		"Are you sure you want to start this mariadb?",
		"确定要启动此 MariaDB 吗？"
	],
	[
		"Are you sure you want to start this mongo?",
		"确定要启动此 MongoDB 吗？"
	],
	[
		"Are you sure you want to start this mysql?",
		"确定要启动此 MySQL 吗？"
	],
	[
		"Are you sure you want to start this postgres?",
		"确定要启动此 PostgreSQL 数据库吗？"
	],
	[
		"Are you sure you want to start this redis?",
		"确定要启动此 Redis 吗？"
	],
	[
		"Are you sure you want to stop this application?",
		"确定要停止此应用吗？"
	],
	[
		"Are you sure you want to stop this compose?",
		"确定要停止此 Compose 吗？"
	],
	[
		"Are you sure you want to stop this Libsql?",
		"确定要停止此 Libsql 吗？"
	],
	[
		"Are you sure you want to stop this mariadb?",
		"确定要停止此 MariaDB 吗？"
	],
	[
		"Are you sure you want to stop this mongo?",
		"确定要停止此 MongoDB 吗？"
	],
	[
		"Are you sure you want to stop this mysql?",
		"确定要停止此 MySQL 吗？"
	],
	[
		"Are you sure you want to stop this postgres?",
		"确定要停止此 PostgreSQL 数据库吗？"
	],
	[
		"Are you sure you want to stop this redis?",
		"确定要停止此 Redis 吗？"
	],
	[
		"Are you sure you want to unlink this user?",
		"确定要解除此用户的关联吗？"
	],
	[
		"Are you sure?",
		"确定吗？"
	],
	[
		"Argument cannot be empty",
		"参数不能为空"
	],
	[
		"Arguments (Args)",
		"参数（Args）"
	],
	[
		"Arguments are available only at build-time. See documentation",
		"参数仅在构建时可用。查看文档"
	],
	[
		"Assign a name and description to your application",
		"为你的应用设置名称和描述"
	],
	[
		"Assign a name and description to your compose",
		"为 Compose 设置名称和描述"
	],
	[
		"Assign new domains to services",
		"为服务分配新域名"
	],
	[
		"Assign specific Git Providers to users with an Enterprise license.",
		"使用企业版许可证为用户分配指定的 Git 提供商"
	],
	[
		"Assign specific Servers to users with an Enterprise license.",
		"使用企业版许可证为用户分配指定的服务器"
	],
	[
		"Assigned automatically to users joining through SSO and preselected when creating invitations.",
		"通过 SSO 加入的用户将自动分配此角色，创建邀请时也会预先选中此角色"
	],
	[
		"Assigned members",
		"已分配成员"
	],
	[
		"assigned to custom roles. Custom roles will not work without a valid Enterprise license. Please activate your license or change these users to a free role (Admin or Member).",
		"已被分配自定义角色。没有有效的企业版许可证，自定义角色将无法使用。请激活许可证，或将这些用户更改为免费角色（管理员或成员）"
	],
	[
		"At least one domain is required",
		"至少需要一个域名"
	],
	[
		"At least one email is required",
		"至少需要填写一个邮箱地址"
	],
	[
		"At the scheduled time, the cleanup job will keep only the last 1000 entries in the access log file and signal Traefik to reopen its log files. The default schedule is daily at midnight (0 0 * * *).",
		"清理任务将在预定时间仅保留访问日志文件中的最后 1000 条记录，并通知 Traefik 重新打开其日志文件。默认每天午夜执行（0 0 * * *）"
	],
	[
		"Attach additional Docker networks to this service so it can reach services on those networks. Takes effect on the next deploy.",
		"为此服务连接其他 Docker 网络，使其可以访问这些网络中的服务。更改将在下次部署时生效"
	],
	[
		"Attach Docker networks per service and detach it from dokploy-network. Takes effect on the next deploy.",
		"为各服务连接 Docker 网络，并将其与 dokploy-network 断开。更改将在下次部署时生效"
	],
	[
		"Attach the service to one or more networks. Specify the network name (Target) and optional network aliases for service discovery.",
		"将服务连接到一个或多个网络。指定网络名称（Target），并可选择设置用于服务发现的网络别名"
	],
	[
		"Attachable",
		"可连接"
	],
	[
		"Attributes",
		"属性"
	],
	[
		"Audit Logs",
		"审计日志"
	],
	[
		"Auth domain",
		"认证域名"
	],
	[
		"Authentication (Update to use API Token)",
		"身份验证（更新为使用 API 令牌）"
	],
	[
		"Authentication proxy deployed",
		"认证代理已部署"
	],
	[
		"Authentication proxy removed",
		"认证代理已移除"
	],
	[
		"Authentication will be performed on",
		"身份验证将在"
	],
	[
		"Authorize Now",
		"立即授权"
	],
	[
		"Auto",
		"自动"
	],
	[
		"Auto Deploy Updated",
		"自动部署设置已更新"
	],
	[
		"auto-provisions a certificate automatically for this host.",
		"会自动为此主机配置证书"
	],
	[
		"Autodeploy",
		"自动部署"
	],
	[
		"Automated Backups",
		"自动备份"
	],
	[
		"Automatic deployments are disabled for this application",
		"此应用已禁用自动部署"
	],
	[
		"Automatic deployments are disabled for this compose",
		"此 Compose 已禁用自动部署"
	],
	[
		"Automatic process",
		"自动流程"
	],
	[
		"Automatically check for new updates",
		"自动检查更新"
	],
	[
		"Automatically provision SSL Certificate.",
		"自动配置 SSL 证书"
	],
	[
		"Automatically provision, update, and deactivate users from your identity provider (Okta, Entra ID, etc.). Configure the SCIM endpoint below in your IdP.",
		"自动从身份提供商（Okta、Entra ID 等）预配、更新和停用用户。请在 IdP 中配置下方的 SCIM 端点"
	],
	[
		"Automatically prune unused Docker images daily. Keeps disk usage in check on this remote server.",
		"每天自动清理未使用的 Docker 镜像，控制此远程服务器的磁盘占用"
	],
	[
		"Availability",
		"可用性"
	],
	[
		"Availability:",
		"可用性："
	],
	[
		"Available GPUs",
		"可用 GPU"
	],
	[
		"Available Providers",
		"可用提供商"
	],
	[
		"Avatar",
		"头像"
	],
	[
		"Back",
		"返回"
	],
	[
		"Back to Actions",
		"返回操作列表"
	],
	[
		"Backup Code",
		"备用码"
	],
	[
		"Backup Codes",
		"备份代码"
	],
	[
		"Backup codes copied to clipboard",
		"备份代码已复制到剪贴板"
	],
	[
		"Backup codes regenerated successfully",
		"备份代码已成功重新生成"
	],
	[
		"Backup deleted successfully",
		"备份删除成功"
	],
	[
		"Backup file copied to clipboard",
		"备份文件已复制到剪贴板"
	],
	[
		"Backup file is required",
		"必须选择备份文件"
	],
	[
		"Backup Prefix",
		"备份前缀"
	],
	[
		"Backups",
		"备份"
	],
	[
		"Base URL (optional)",
		"基础 URL（可选）"
	],
	[
		"Base64 content is required",
		"Base64 内容为必填项"
	],
	[
		"Based on your input, we suggest the following variants:",
		"根据你的输入，我们建议以下方案："
	],
	[
		"Bearer token for",
		"Bearer 令牌，提供商："
	],
	[
		"Before getting started, please follow the steps below to ensure the best experience:",
		"开始之前，请按照以下步骤操作，以获得最佳体验："
	],
	[
		"Big list of common open source templates in one-click",
		"一键使用丰富的常用开源模板"
	],
	[
		"Billing",
		"账单"
	],
	[
		"Billing interval",
		"计费周期"
	],
	[
		"billing).",
		"计费）"
	],
	[
		"Binary file — use Download instead",
		"二进制文件——请改用“下载”"
	],
	[
		"Bind Mount",
		"绑定挂载"
	],
	[
		"Bitbucket Account",
		"Bitbucket 账户"
	],
	[
		"Bitbucket App Passwords are deprecated for new providers. Use an API Token instead. Existing providers with App Passwords will continue to work until 9th June 2026.",
		"新建提供商时，Bitbucket 应用密码已弃用。请改用 API 令牌。使用应用密码的现有提供商可继续使用至 2026 年 6 月 9 日"
	],
	[
		"Bitbucket configured successfully",
		"Bitbucket 配置成功"
	],
	[
		"Bitbucket Email",
		"Bitbucket 邮箱"
	],
	[
		"Bitbucket Provider",
		"Bitbucket 提供商"
	],
	[
		"Bitbucket Provider is required",
		"必须选择 Bitbucket 提供商"
	],
	[
		"Bitbucket settings",
		"Bitbucket 设置"
	],
	[
		"Bitbucket updated successfully",
		"Bitbucket 更新成功"
	],
	[
		"Bitbucket Username",
		"Bitbucket 用户名"
	],
	[
		"Block I/O",
		"磁盘 I/O"
	],
	[
		"Bot Token",
		"机器人令牌"
	],
	[
		"Bot Token is required",
		"机器人令牌为必填项"
	],
	[
		"Both Build Server and Build Registry must be selected together, or both set to None",
		"必须同时选择构建服务器和构建镜像仓库，或将两者都设为“无”"
	],
	[
		"both in the running database container and in Dokploy. The container must be running for this operation to succeed.",
		"。容器必须处于运行状态，此操作才能成功"
	],
	[
		"Branch",
		"分支"
	],
	[
		"Branch is required",
		"分支为必填项"
	],
	[
		"Branch Not Match",
		"分支不匹配"
	],
	[
		"Branch required",
		"分支为必填项"
	],
	[
		"Branch:",
		"分支："
	],
	[
		"Branding",
		"品牌设置"
	],
	[
		"bridge for single-server containers; overlay for Swarm services.",
		"bridge 用于单台服务器上的容器；overlay 用于 Swarm 服务"
	],
	[
		"Browse and edit files inside the container's filesystem",
		"浏览和编辑容器文件系统中的文件"
	],
	[
		"Browse Files",
		"浏览文件"
	],
	[
		"Browse volume files",
		"浏览卷文件"
	],
	[
		"Browser tab icon. Supports .ico, .png, and .svg formats.",
		"浏览器标签页图标。支持 .ico、.png 和 .svg 格式"
	],
	[
		"Browser tab title. Defaults to \"Dokploy\" if empty.",
		"浏览器标签页标题。留空时默认为“Dokploy”"
	],
	[
		"Bucket",
		"存储桶"
	],
	[
		"Bucket is required",
		"必须填写存储桶"
	],
	[
		"Build a social media dashboard",
		"构建社交媒体仪表板"
	],
	[
		"Build appears to be stuck",
		"构建似乎已卡住"
	],
	[
		"Build Cache",
		"构建缓存"
	],
	[
		"Build cache pruned",
		"构建缓存已清理"
	],
	[
		"Build configuration",
		"构建配置"
	],
	[
		"Build killed successfully",
		"构建已成功终止"
	],
	[
		"Build Path",
		"构建路径"
	],
	[
		"Build Registry",
		"构建镜像仓库"
	],
	[
		"Build Server",
		"构建服务器"
	],
	[
		"Build Server and Build Registry must be configured together. You can either select both or set both to None.",
		"构建服务器和构建镜像仓库必须同时配置。你可以同时选择两者，或将两者都设为“无”"
	],
	[
		"Build Server Settings Updated",
		"构建服务器设置已更新"
	],
	[
		"Build Servers",
		"构建服务器"
	],
	[
		"Build Servers (",
		"构建服务器（"
	],
	[
		"Build servers are dedicated to building your applications. They handle the compilation and build process, offloading this work from your deployment servers. Build servers won't appear in deployment options.",
		"构建服务器专用于构建应用，负责处理编译和构建流程，从而减轻部署服务器的负担。构建服务器不会显示在部署选项中"
	],
	[
		"Build servers offload the build process from your deployment servers. Select a build server and registry to use for building your application.",
		"构建服务器可将构建任务从部署服务器转移出去。请选择用于构建应用的构建服务器和镜像仓库"
	],
	[
		"Build Type",
		"构建类型"
	],
	[
		"Build type saved",
		"构建类型已保存"
	],
	[
		"Build-time Arguments",
		"构建时参数"
	],
	[
		"Build-time Secrets",
		"构建时密钥"
	],
	[
		"Build:",
		"构建："
	],
	[
		"Builders can consume significant memory and CPU resources (recommended: 4+ GB RAM and 2+ CPU cores). For production environments, please review our",
		"构建器可能会占用大量内存和 CPU 资源（建议：4 GB 以上 RAM 和 2 个以上 CPU 核心）。对于生产环境，请查看我们的"
	],
	[
		"Buildpacks Installed",
		"Buildpacks 已安装"
	],
	[
		"Builds concurrency updated",
		"构建并发数已更新"
	],
	[
		"Bulk Actions",
		"批量操作"
	],
	[
		"Button",
		"按钮"
	],
	[
		"By clicking the confirm button, the terminal will be closed.",
		"点击确认按钮后，终端将关闭"
	],
	[
		"By default the service joins the shared dokploy-network. Detach it to keep it reachable only through the networks you attach below.",
		"默认情况下，该服务会加入共享的 dokploy-network。将其断开后，服务将只能通过下方连接的网络访问"
	],
	[
		"Cache ID",
		"缓存 ID"
	],
	[
		"Cache layers kept by the Docker builder on the selected server.",
		"所选服务器上由 Docker 构建器保留的缓存层"
	],
	[
		"Cache: If you previously deployed this compose, it will read the services from the last deployment/fetch from the repository",
		"缓存：如果您之前部署过此 Compose，将从上次部署或仓库拉取结果中读取服务"
	],
	[
		"Callback URL (configure in your IdP)",
		"回调 URL（请在 IdP 中配置）"
	],
	[
		"Callback URL (register once in your IdP)",
		"回调 URL（仅需在 IdP 中注册一次）"
	],
	[
		"Callback URL copied",
		"回调 URL 已复制"
	],
	[
		"Can manage users and settings.",
		"可管理用户和设置"
	],
	[
		"Can't scan the QR code?",
		"无法扫描二维码？"
	],
	[
		"Cancel",
		"取消"
	],
	[
		"Cancel Deployment",
		"取消部署"
	],
	[
		"Cancel Invitation",
		"取消邀请"
	],
	[
		"Cancel Queues",
		"取消队列"
	],
	[
		"Cancel running deployments",
		"取消正在运行的部署"
	],
	[
		"Cancelled",
		"已取消"
	],
	[
		"Cannot be changed when editing.",
		"编辑时无法更改"
	],
	[
		"Cannot create a user with the owner role",
		"不能创建所有者角色的用户"
	],
	[
		"Cannot delete - has active services",
		"无法删除——存在活动服务"
	],
	[
		"Cannot delete built-in roles",
		"无法删除内置角色"
	],
	[
		"Cannot delete the service while it is running. Please wait for the build to finish and then try again.",
		"服务运行时无法删除。请等待构建完成后重试"
	],
	[
		"Cannot invite a user with the owner role",
		"不能以所有者角色邀请用户"
	],
	[
		"Cannot modify built-in roles",
		"无法修改内置角色"
	],
	[
		"Cannot revoke your own session. Use logout instead.",
		"无法撤销自己的会话，请改用退出登录"
	],
	[
		"Cannot set owner as the default role",
		"不能将所有者设为默认角色"
	],
	[
		"Cert:",
		"证书："
	],
	[
		"Certificate",
		"证书"
	],
	[
		"Certificate Created",
		"证书已创建"
	],
	[
		"Certificate Data",
		"证书数据"
	],
	[
		"Certificate data is required",
		"证书数据为必填项"
	],
	[
		"Certificate deleted successfully",
		"证书删除成功"
	],
	[
		"Certificate Name",
		"证书名称"
	],
	[
		"Certificate provider",
		"证书提供商"
	],
	[
		"Certificate Provider",
		"证书提供商"
	],
	[
		"Certificate Updated",
		"证书已更新"
	],
	[
		"Certificates",
		"证书"
	],
	[
		"Certificates are created in the Traefik directory. Traefik uses these certificates to secure your applications. Using invalid certificates can break your Traefik instance, preventing access to your applications.",
		"证书将在 Traefik 目录中创建。Traefik 使用这些证书保护你的应用。使用无效证书可能会导致 Traefik 实例故障，使你的应用无法访问"
	],
	[
		"certificates)",
		"个证书）"
	],
	[
		"Chain (",
		"证书链（"
	],
	[
		"Change Icon",
		"更改图标"
	],
	[
		"Change issuer, domains, client settings or scopes. Provider ID cannot be changed.",
		"更改颁发者、域名、客户端设置或作用域。提供商 ID 无法更改"
	],
	[
		"Change issuer, domains, entry point or certificate. Provider ID cannot be changed.",
		"更改颁发者、域名、入口点或证书。提供商 ID 无法更改"
	],
	[
		"Change member roles and permissions",
		"更改成员角色和权限"
	],
	[
		"Change plan or number of servers",
		"更改套餐或服务器数量"
	],
	[
		"Change provider",
		"更换提供商"
	],
	[
		"Change Role",
		"更改角色"
	],
	[
		"Change the details of your profile here.",
		"在此修改您的个人资料"
	],
	[
		"Change the role for",
		"更改以下用户的角色："
	],
	[
		"Change User Role",
		"更改用户角色"
	],
	[
		"Change Variant",
		"更改方案"
	],
	[
		"Changing scheduleType is not allowed in the cloud version.",
		"云版本中不允许更改 scheduleType"
	],
	[
		"Changing settings such as placements may cause the logs/monitoring, backups and other features to be unavailable.",
		"更改放置等设置可能会导致日志、监控、备份及其他功能不可用"
	],
	[
		"Channel",
		"频道"
	],
	[
		"Chat ID",
		"聊天 ID"
	],
	[
		"Chat ID is required",
		"聊天 ID 为必填项"
	],
	[
		"Check for new releases and update Dokploy.",
		"检查新版本并更新 Dokploy"
	],
	[
		"Check for updates",
		"检查更新"
	],
	[
		"Check if your server is ready for deployment",
		"检查服务器是否已准备好进行部署"
	],
	[
		"Check server health",
		"检查服务器健康状态"
	],
	[
		"Check the",
		"前往"
	],
	[
		"Check the security suggestions",
		"检查安全建议"
	],
	[
		"Check to save configs with Go templating (e.g.",
		"勾选后可保存包含 Go 模板的配置（例如"
	],
	[
		"Check your requisites",
		"检查前提条件"
	],
	[
		"Checking DNS...",
		"正在检查 DNS..."
	],
	[
		"Checking for updates",
		"正在检查更新"
	],
	[
		"Checking for updates...",
		"正在检查更新..."
	],
	[
		"Checking GPU status...",
		"正在检查 GPU 状态..."
	],
	[
		"Checking license key...",
		"正在检查许可证密钥..."
	],
	[
		"Checking license...",
		"正在检查许可证..."
	],
	[
		"Checking PostgreSQL and Traefik...",
		"正在检查 PostgreSQL 和 Traefik..."
	],
	[
		"Checking Server configuration",
		"正在检查服务器配置"
	],
	[
		"Checking server health…",
		"正在检查服务器健康状态…"
	],
	[
		"Checking servers...",
		"正在检查服务器..."
	],
	[
		"Checking...",
		"正在检查..."
	],
	[
		"Checkout complete",
		"支付完成"
	],
	[
		"Checkout Steps",
		"查看步骤"
	],
	[
		"Choose a color to easily identify this tag",
		"选择一种颜色以便识别此标签"
	],
	[
		"Choose a file from the tree on the left to view and edit its contents.",
		"从左侧目录树中选择文件，即可查看和编辑其内容"
	],
	[
		"Choose a predefined schedule or enter a custom cron expression",
		"选择预设定时任务或输入自定义 Cron 表达式"
	],
	[
		"Choose a unique identifier for this IdP connection (lowercase, alphanumeric, dashes).",
		"为此 IdP 连接选择一个唯一标识符（小写字母、数字和连字符）"
	],
	[
		"Choose a Variant",
		"选择方案"
	],
	[
		"Choose an action to manage your two-factor authentication",
		"选择一项操作来管理双重身份验证"
	],
	[
		"Choose between invitation link flow or direct credentials provisioning",
		"选择通过邀请链接或直接设置凭据来创建用户"
	],
	[
		"Choose between replicated or global service mode",
		"选择副本模式或全局服务模式"
	],
	[
		"Choose how to add SSH Keys to your server:",
		"选择如何将 SSH 密钥添加到服务器："
	],
	[
		"Choose the backup destination where files will be stored",
		"选择用于存储备份文件的存储目标"
	],
	[
		"Choose the shell to execute your command",
		"选择用于执行命令的 Shell"
	],
	[
		"Choose the volume to backup. If you do not see the volume here, you can type the volume name manually",
		"选择要备份的卷。如果此处没有该卷，可以手动输入卷名称"
	],
	[
		"Choose when to trigger deployments: on push to the selected branch or when a new tag is created.",
		"选择触发部署的时机：推送到所选分支时，或创建新标签时"
	],
	[
		"Choose where to authenticate with the registry. By default, authentication occurs on the Dokploy server. Select a specific server to authenticate from that server instead.",
		"选择用于镜像仓库身份验证的位置。默认在 Dokploy 服务器上进行身份验证；选择特定服务器后，将改为从该服务器进行身份验证"
	],
	[
		"Choose where to duplicate the selected services",
		"选择要将所选服务复制到的位置"
	],
	[
		"CI/CD Integration",
		"CI/CD 集成"
	],
	[
		"Claim mapping",
		"声明映射"
	],
	[
		"Clean all",
		"全部清理"
	],
	[
		"Clean all deployment queue",
		"清空所有部署队列"
	],
	[
		"Clean Cache",
		"清理缓存"
	],
	[
		"Clean Cache Updated",
		"清理缓存设置已更新"
	],
	[
		"Clean Docker Builder & System",
		"清理 Docker 构建器和系统"
	],
	[
		"Clean Monitoring",
		"清理监控数据"
	],
	[
		"Clean Patch Caches",
		"清理补丁缓存"
	],
	[
		"Clean stopped containers",
		"清理已停止的容器"
	],
	[
		"Clean unused images",
		"清理未使用的镜像"
	],
	[
		"Clean unused volumes",
		"清理未使用的卷"
	],
	[
		"Cleaned Docker Builder",
		"Docker 构建器已清理"
	],
	[
		"Cleaned images",
		"镜像已清理"
	],
	[
		"Cleaned Monitoring",
		"监控数据已清理"
	],
	[
		"Cleaned Patch Caches",
		"补丁缓存已清理"
	],
	[
		"Cleaned volumes",
		"卷已清理"
	],
	[
		"Cleaning in progress... Please wait",
		"正在清理...请稍候"
	],
	[
		"Clear",
		"清除"
	],
	[
		"Clear deployments",
		"清理部署"
	],
	[
		"Clear filters",
		"清除筛选条件"
	],
	[
		"Click a provider below to link it to your account. You will be redirected to complete the flow.",
		"点击下方的提供商，将其关联到您的账户。您将被重定向以完成关联流程"
	],
	[
		"Click on Create API token with scopes",
		"点击“创建具有权限范围的 API 令牌”"
	],
	[
		"Click the bookmark icon on templates to add them to bookmarks",
		"点击模板上的书签图标即可将其添加到书签"
	],
	[
		"Click to validate DNS configuration",
		"点击验证 DNS 配置"
	],
	[
		"Client ID",
		"客户端 ID"
	],
	[
		"Client ID from IdP",
		"来自 IdP 的客户端 ID"
	],
	[
		"Client ID is required",
		"必须填写客户端 ID"
	],
	[
		"Client secret",
		"客户端密钥"
	],
	[
		"Client Secret",
		"客户端密钥"
	],
	[
		"Client secret from IdP",
		"来自 IdP 的客户端密钥"
	],
	[
		"Client secret is required",
		"客户端密钥为必填项"
	],
	[
		"Client Secret is required",
		"必须填写客户端密钥"
	],
	[
		"Close",
		"关闭"
	],
	[
		"Cluster",
		"集群"
	],
	[
		"Cluster Settings",
		"集群设置"
	],
	[
		"Cluster Warning:",
		"集群警告："
	],
	[
		"CN:",
		"CN："
	],
	[
		"Collaborate with your team on shared projects with customizable permissions.",
		"通过可自定义的权限，与团队协作处理共享项目"
	],
	[
		"Collapse commit message",
		"收起提交信息"
	],
	[
		"Color (Optional)",
		"颜色（可选）"
	],
	[
		"Columns",
		"列"
	],
	[
		"Comma-separated list of network aliases",
		"以逗号分隔的网络别名列表"
	],
	[
		"Command",
		"命令"
	],
	[
		"Command is required",
		"命令不能为空"
	],
	[
		"Command Palette",
		"命令面板"
	],
	[
		"Command to run for health check (e.g., [\"CMD-SHELL\", \"curl -f http://localhost:3000/health\"])",
		"用于健康检查的命令（例如 [\"CMD-SHELL\", \"curl -f http://localhost:3000/health\"]）"
	],
	[
		"Command Updated",
		"命令已更新"
	],
	[
		"Complete",
		"完成"
	],
	[
		"Completely disable two-factor authentication for your account. This will make your account less secure.",
		"完全禁用账户的双重身份验证。这会降低账户的安全性"
	],
	[
		"Compose Backups",
		"Compose 备份"
	],
	[
		"Compose config Updated",
		"Compose 配置已更新"
	],
	[
		"Compose Created",
		"Compose 创建成功"
	],
	[
		"Compose deployed successfully",
		"Compose 部署成功"
	],
	[
		"Compose File",
		"Compose 文件"
	],
	[
		"Compose imported successfully",
		"Compose 导入成功"
	],
	[
		"Compose name is required",
		"必须填写 Compose 名称"
	],
	[
		"Compose Not Found",
		"未找到 Compose"
	],
	[
		"Compose Path",
		"Compose 路径"
	],
	[
		"Compose rebuilt successfully",
		"Compose 重新构建成功"
	],
	[
		"compose service",
		"个 Compose 服务"
	],
	[
		"Compose started successfully",
		"Compose 启动成功"
	],
	[
		"Compose stopped successfully",
		"Compose 已成功停止"
	],
	[
		"Compose Type",
		"Compose 类型"
	],
	[
		"Compose updated",
		"Compose 已更新"
	],
	[
		"Compose updated successfully",
		"Compose 已成功更新"
	],
	[
		"Compose:",
		"Compose："
	],
	[
		"Concurrent Builds",
		"并发构建"
	],
	[
		"Condition",
		"条件"
	],
	[
		"Config",
		"配置"
	],
	[
		"Config (optional)",
		"配置（可选）"
	],
	[
		"Config (subnet / gateway / IP range)",
		"配置（子网 / 网关 / IP 范围）"
	],
	[
		"Configuration (Base64)",
		"配置（Base64）"
	],
	[
		"Configuration Files",
		"配置文件"
	],
	[
		"Configuration Incomplete",
		"配置不完整"
	],
	[
		"Configure",
		"配置"
	],
	[
		"Configure a dedicated server for building your application.",
		"配置专用于构建应用的服务器"
	],
	[
		"configure a registry",
		"配置镜像仓库"
	],
	[
		"Configure AI Provider",
		"配置 AI 提供商"
	],
	[
		"Configure and initialize your server with Docker, Traefik, and other essential services",
		"使用 Docker、Traefik 和其他必要服务配置并初始化服务器"
	],
	[
		"Configure and monitor GPU support",
		"配置并监控 GPU 支持"
	],
	[
		"Configure automated rollback on update failure. Uses same parameters as UpdateConfig: Parallelism, Delay, FailureAction, Monitor, MaxFailureRatio, and Order.",
		"配置更新失败时自动回滚。使用与 UpdateConfig 相同的参数：Parallelism、Delay、FailureAction、Monitor、MaxFailureRatio 和 Order"
	],
	[
		"Configure Bitbucket",
		"配置 Bitbucket"
	],
	[
		"Configure endpoint mode for service discovery. Mode 'vip' (virtual IP - default) uses a single virtual IP. Mode 'dnsrr' (DNS round-robin) returns DNS entries for all tasks.",
		"配置用于服务发现的端点模式。“vip”模式（虚拟 IP，默认）使用单个虚拟 IP；“dnsrr”模式（DNS 轮询）返回所有任务的 DNS 记录"
	],
	[
		"Configure endpoint specification",
		"配置端点规范"
	],
	[
		"Configure Gitea App",
		"配置 Gitea 应用"
	],
	[
		"Configure GitLab App",
		"配置 GitLab 应用"
	],
	[
		"Configure health check settings",
		"配置健康检查设置"
	],
	[
		"Configure HEALTHCHECK to test a container's health. Determines if a container is healthy by running a command inside the container. Test, Interval, Timeout, StartPeriod, and Retries control health monitoring.",
		"配置 HEALTHCHECK 以检测容器的健康状态。通过在容器内运行命令来判断容器是否健康。Test、Interval、Timeout、StartPeriod 和 Retries 参数用于控制健康监控"
	],
	[
		"Configure how many deployments can build at the same time on each server. Builds of the same service are always serialized.",
		"配置每台服务器可同时构建的部署数量。同一服务的构建始终串行执行"
	],
	[
		"Configure how rollbacks work for this application",
		"配置此应用的回滚方式"
	],
	[
		"Configure how the service should be updated. Parallelism (tasks updated simultaneously), Delay, FailureAction (pause, continue, rollback), Monitor, MaxFailureRatio, and Order (stop-first, start-first) control updates.",
		"配置服务的更新方式。Parallelism（同时更新的任务数）、Delay、FailureAction（pause、continue、rollback）、Monitor、MaxFailureRatio 和 Order（stop-first、start-first）参数用于控制更新"
	],
	[
		"Configure isolated deployment to the compose file.",
		"在 Compose 文件中配置隔离部署"
	],
	[
		"Configure network attachments",
		"配置网络连接"
	],
	[
		"Configure network attachments for your service",
		"配置服务的网络连接"
	],
	[
		"Configure OIDC or SAML identity providers for enterprise sign-in. Users can sign in with their organization's IdP.",
		"配置 OIDC 或 SAML 身份提供商以支持企业登录。用户可通过其组织的 IdP 登录"
	],
	[
		"Configure placement constraints",
		"配置放置约束"
	],
	[
		"Configure restart policy",
		"配置重启策略"
	],
	[
		"Configure rollback strategy",
		"配置回滚策略"
	],
	[
		"Configure Rollbacks",
		"配置回滚"
	],
	[
		"Configure service labels",
		"配置服务标签"
	],
	[
		"Configure service mode",
		"配置服务模式"
	],
	[
		"Configure stop grace period",
		"配置停止宽限期"
	],
	[
		"Configure swarm settings for your service.",
		"配置服务的 Swarm 设置"
	],
	[
		"Configure the restart policy for containers in the service. Condition (none, on-failure, any), Delay (nanoseconds between restarts), MaxAttempts, and Window control restart behavior.",
		"配置服务中容器的重启策略。Condition（none、on-failure、any）、Delay（重启间隔，单位为纳秒）、MaxAttempts 和 Window 参数用于控制重启行为"
	],
	[
		"Configure update strategy",
		"配置更新策略"
	],
	[
		"Configure your AI provider settings",
		"配置您的 AI 提供商设置"
	],
	[
		"Configure your billing email notifications.",
		"配置账单邮件通知"
	],
	[
		"Configure your Docker Compose file for this service.",
		"为此服务配置 Docker Compose 文件"
	],
	[
		"Confirm",
		"确认"
	],
	[
		"Confirm Anyway",
		"仍要确认"
	],
	[
		"Confirm initial password",
		"确认初始密码"
	],
	[
		"Confirm Password",
		"确认密码"
	],
	[
		"Confirm password is required",
		"请确认密码"
	],
	[
		"Confirm plan change",
		"确认更改套餐"
	],
	[
		"Confirm upgrade",
		"确认升级"
	],
	[
		"Connect",
		"连接"
	],
	[
		"Connect a DNS provider so Dokploy can create the A/CNAME record for a domain instead of you setting it up by hand.",
		"连接 DNS 提供商后，Dokploy 可为域名创建 A/CNAME 记录，无需手动设置"
	],
	[
		"Connect a DNS provider to create records for your domains automatically instead of setting them up by hand.",
		"连接 DNS 提供商后，可自动为域名创建记录，无需手动设置"
	],
	[
		"Connect external secret managers and reference their secrets in environment variables with",
		"连接外部密钥管理器，并使用以下格式在环境变量中引用其中的密钥"
	],
	[
		"Connect new DNS providers, test their connection, and create records",
		"连接新的 DNS 提供商、测试连接并创建记录"
	],
	[
		"Connect new secret providers and test their connection",
		"连接新的密钥提供商并测试连接"
	],
	[
		"Connect to Gitea",
		"连接到 Gitea"
	],
	[
		"Connect your Git provider for authentication.",
		"连接您的 Git 提供商以进行身份验证"
	],
	[
		"Connection error. Please check your internet connection.",
		"连接错误。请检查网络连接"
	],
	[
		"Connection failed",
		"连接失败"
	],
	[
		"Connection settings",
		"连接设置"
	],
	[
		"Connection Success",
		"连接成功"
	],
	[
		"Connection successful",
		"连接成功"
	],
	[
		"Constraints",
		"约束"
	],
	[
		"Contact Sales",
		"联系销售"
	],
	[
		"Contact us",
		"联系我们"
	],
	[
		"Container",
		"容器"
	],
	[
		"Container Breakdown by Node",
		"各节点容器分布"
	],
	[
		"Container Config",
		"容器配置"
	],
	[
		"Container Errors Detected",
		"检测到容器错误"
	],
	[
		"Container Files",
		"容器文件"
	],
	[
		"Container ID",
		"容器 ID"
	],
	[
		"Container ID copied to clipboard",
		"容器 ID 已复制到剪贴板"
	],
	[
		"Container Information",
		"容器信息"
	],
	[
		"Container Monitoring",
		"容器监控"
	],
	[
		"Container Mounts",
		"容器挂载"
	],
	[
		"Container Networks",
		"容器网络"
	],
	[
		"Container Port",
		"容器端口"
	],
	[
		"Container port exposed",
		"暴露的容器端口"
	],
	[
		"Container Refresh Rate",
		"容器刷新间隔"
	],
	[
		"Container Refresh Rate is required",
		"容器刷新间隔为必填项"
	],
	[
		"Container removed successfully",
		"容器已成功删除"
	],
	[
		"Container restarted",
		"容器已重启"
	],
	[
		"Containers",
		"容器"
	],
	[
		"containers ·",
		"个容器 ·"
	],
	[
		"Containers (",
		"容器 ("
	],
	[
		"Containers & services",
		"容器和服务"
	],
	[
		"Containers are failing to start — check deployment logs for errors",
		"容器启动失败 — 请检查部署日志中的错误"
	],
	[
		"Containers on this network cannot reach external networks.",
		"此网络中的容器无法访问外部网络"
	],
	[
		"Content",
		"内容"
	],
	[
		"Content is required",
		"必须填写内容"
	],
	[
		"Continue",
		"继续"
	],
	[
		"Control deployment targets and authentication behavior.",
		"控制部署目标和身份验证行为"
	],
	[
		"Control which nodes service tasks can be scheduled on. Constraints (node.id==xyz), Preferences (spread.node.labels.zone), MaxReplicas, and Platforms specify task placement rules.",
		"控制服务任务可调度到哪些节点。Constraints（node.id==xyz）、Preferences（spread.node.labels.zone）、MaxReplicas 和 Platforms 参数用于指定任务放置规则"
	],
	[
		"Converted Compose",
		"转换后的 Compose"
	],
	[
		"Copied",
		"已复制"
	],
	[
		"Copied to clipboard",
		"已复制到剪贴板"
	],
	[
		"Copied to clipboard!",
		"已复制到剪贴板！"
	],
	[
		"Copied to clipboard.",
		"已复制到剪贴板"
	],
	[
		"Copied to clipboard. Be careful!",
		"已复制到剪贴板，请谨慎操作！"
	],
	[
		"Copy",
		"复制"
	],
	[
		"Copy analysis to clipboard",
		"将分析结果复制到剪贴板"
	],
	[
		"Copy Container ID",
		"复制容器 ID"
	],
	[
		"Copy Invitation",
		"复制邀请链接"
	],
	[
		"Copy logs to clipboard",
		"将日志复制到剪贴板"
	],
	[
		"Copy Public Key",
		"复制公钥"
	],
	[
		"Copy Public Key (",
		"复制公钥 ("
	],
	[
		"Copy this token now — it will not be shown again. Paste it into your IdP's SCIM configuration.",
		"请立即复制此令牌——之后将不再显示。请将其粘贴到 IdP 的 SCIM 配置中"
	],
	[
		"Copy to Clipboard",
		"复制到剪贴板"
	],
	[
		"Copy webhook URL to clipboard",
		"将 Webhook URL 复制到剪贴板"
	],
	[
		"core (Core File Size)",
		"core（核心转储文件大小）"
	],
	[
		"Could not determine expiration",
		"无法确定到期时间"
	],
	[
		"Could not load the compose services. If this compose was just created from a template, it hasn't been cloned yet — click Reload to clone the repository and read its services.",
		"无法加载 Compose 服务。如果此 Compose 刚通过模板创建，则仓库尚未克隆——请点击“重新加载服务”以克隆仓库并读取其中的服务"
	],
	[
		"Could not reach Docker Swarm.",
		"无法连接 Docker Swarm"
	],
	[
		"Could not reach this server in time",
		"未能及时连接到此服务器"
	],
	[
		"Could not verify services. You can still proceed with the update.",
		"无法验证服务，但仍可继续更新"
	],
	[
		"Couldn't read network IP usage:",
		"无法读取网络 IP 使用情况："
	],
	[
		"Couldn't read server health:",
		"无法读取服务器健康状态："
	],
	[
		"Count",
		"数量"
	],
	[
		"cpu (CPU Time)",
		"cpu（CPU 时间）"
	],
	[
		"CPU cores",
		"个 CPU 核心"
	],
	[
		"CPU Limit",
		"CPU 上限"
	],
	[
		"CPU quota in units of 10^-9 CPUs. Example: 2 CPUs = 2000000000. Use +/- buttons to adjust by 0.25 CPU.",
		"CPU 配额，单位为 10^-9 个 CPU。例如：2 个 CPU = 2000000000。使用 +/- 按钮可按 0.25 个 CPU 调整"
	],
	[
		"CPU Reservation",
		"CPU 预留"
	],
	[
		"CPU shares (relative weight). Example: 1 CPU = 1000000000. Use +/- buttons to adjust by 0.25 CPU.",
		"CPU 份额（相对权重）。例如：1 个 CPU = 1000000000。使用 +/- 按钮可按 0.25 个 CPU 调整"
	],
	[
		"CPU Threshold (%)",
		"CPU 阈值（%）"
	],
	[
		"CPU Usage",
		"CPU 使用率"
	],
	[
		"CPU Usage:",
		"CPU 使用率："
	],
	[
		"CPU, memory, and I/O metrics are collected from the manager node via",
		"CPU、内存和 I/O 指标通过管理节点上的"
	],
	[
		"CPUs reserved",
		"个 CPU 已预留"
	],
	[
		"Create",
		"创建"
	],
	[
		"Create a compose file to deploy your compose",
		"创建 Compose 文件以部署 Compose"
	],
	[
		"Create a custom template based on your needs",
		"根据你的需求创建自定义模板"
	],
	[
		"Create a new A or CNAME record in this zone.",
		"在此区域中创建新的 A 或 CNAME 记录"
	],
	[
		"Create a new API key for accessing the API. You can set an expiration date and a custom prefix for better organization.",
		"创建用于访问 API 的新 API 密钥。你可以设置过期时间和自定义前缀，以便更好地管理"
	],
	[
		"Create a new application with the following details:",
		"使用以下信息创建新应用："
	],
	[
		"Create a new Docker network for your organization. Networks are immutable: to change one, delete it and create it again.",
		"为您的组织创建新的 Docker 网络。网络创建后不可修改；如需更改，请删除后重新创建"
	],
	[
		"Create a new environment for your project.",
		"为你的项目创建新环境"
	],
	[
		"Create a new organization to manage your projects.",
		"创建新组织以管理您的项目"
	],
	[
		"Create a new tag to organize your projects",
		"创建新标签以整理项目"
	],
	[
		"Create a personal ad blocker",
		"创建个人广告拦截器"
	],
	[
		"Create a role to define fine-grained access for your team members.",
		"创建角色，为团队成员定义细粒度访问权限"
	],
	[
		"Create a token scoped to Zone → DNS → Edit for the zones you want Dokploy to manage. Avoid the Global API Key.",
		"请创建一个权限范围为 Zone → DNS → Edit 的令牌，并限定于希望由 Dokploy 管理的区域。请勿使用全局 API 密钥"
	],
	[
		"Create a user with initial credentials",
		"使用初始凭据创建用户"
	],
	[
		"Create a volume backup to backup your volume to a destination",
		"创建卷备份，将卷备份到存储目标"
	],
	[
		"Create an A record that points your domain to the server's IP address:",
		"创建一条指向服务器 IP 地址的 A 记录："
	],
	[
		"create an account",
		"创建账户"
	],
	[
		"Create an account",
		"创建账户"
	],
	[
		"Create an open source application from a template",
		"从模板创建开源应用"
	],
	[
		"Create and edit SSH keys",
		"创建和编辑 SSH 密钥"
	],
	[
		"Create and manage API keys for CLI access",
		"创建和管理用于 CLI 访问的 API 密钥"
	],
	[
		"Create and manage custom roles with fine-grained permissions",
		"创建和管理具有细粒度权限的自定义角色"
	],
	[
		"Create and manage SSH Keys, you can use them to access your servers, git private repositories, and more.",
		"创建和管理 SSH 密钥，可用于访问服务器、Git 私有仓库等"
	],
	[
		"Create and manage tags to organize your projects",
		"创建和管理标签，以便整理项目"
	],
	[
		"Create and manage your projects",
		"创建和管理你的项目"
	],
	[
		"Create and run scheduled jobs",
		"创建并运行定时任务"
	],
	[
		"Create and trigger volume backups",
		"创建并触发卷备份"
	],
	[
		"Create and update Git provider connections",
		"创建和更新 Git 提供商连接"
	],
	[
		"Create Backup",
		"创建备份"
	],
	[
		"Create certificates in the Traefik directory",
		"在 Traefik 目录中创建证书"
	],
	[
		"Create Compose",
		"创建 Compose"
	],
	[
		"Create Custom Role",
		"创建自定义角色"
	],
	[
		"Create Docker networks for your organization and optionally attach them to a server. Add your first network to get started.",
		"为您的组织创建 Docker 网络，并可选择将其连接到服务器。添加第一个网络即可开始使用"
	],
	[
		"Create Environment",
		"创建环境"
	],
	[
		"Create Environment File",
		"创建环境变量文件"
	],
	[
		"Create Environments",
		"创建环境"
	],
	[
		"Create file",
		"创建文件"
	],
	[
		"Create from Template",
		"从模板创建"
	],
	[
		"Create GitHub App",
		"创建 GitHub App"
	],
	[
		"Create invitations to your organization.",
		"为你的组织创建邀请"
	],
	[
		"Create network",
		"创建网络"
	],
	[
		"Create new environments in projects",
		"在项目中创建新环境"
	],
	[
		"Create new notification providers for multiple channels.",
		"创建用于多个渠道的通知提供商"
	],
	[
		"Create new OAuth2 Application",
		"创建新的 OAuth2 应用"
	],
	[
		"Create new projects",
		"创建新项目"
	],
	[
		"Create new services inside projects",
		"在项目中创建新服务"
	],
	[
		"Create new tags",
		"创建新标签"
	],
	[
		"Create organization",
		"创建组织"
	],
	[
		"Create Patch",
		"创建补丁"
	],
	[
		"Create Project",
		"创建项目"
	],
	[
		"Create Projects",
		"创建项目"
	],
	[
		"Create Role",
		"创建角色"
	],
	[
		"Create Server",
		"创建服务器"
	],
	[
		"Create Service",
		"创建服务"
	],
	[
		"Create Services",
		"创建服务"
	],
	[
		"Create Tag",
		"创建标签"
	],
	[
		"Create your first scheduled task to automate your workflows",
		"创建第一个定时任务，实现工作流自动化"
	],
	[
		"Create your first volume backup to automate your workflows",
		"创建首个卷备份以实现工作流自动化"
	],
	[
		"Create your ssh key",
		"创建 SSH 密钥"
	],
	[
		"Create, update, and delete environment variables",
		"创建、更新和删除环境变量"
	],
	[
		"Created",
		"创建时间"
	],
	[
		"Created At",
		"创建时间"
	],
	[
		"Created at:",
		"创建时间："
	],
	[
		"Created:",
		"创建时间："
	],
	[
		"Creating",
		"创建"
	],
	[
		"Creating users with initial credentials is only available in self-hosted mode",
		"仅自托管模式支持使用初始凭据创建用户"
	],
	[
		"Creating...",
		"正在创建..."
	],
	[
		"Cron expression format: minute hour day month weekday",
		"Cron 表达式格式：分钟 小时 日期 月份 星期"
	],
	[
		"Cron expression is required",
		"Cron 表达式不能为空"
	],
	[
		"Cron Job",
		"Cron 任务"
	],
	[
		"Cron job for cleaning up metrics",
		"用于清理指标数据的 Cron 任务"
	],
	[
		"Cron Job is required",
		"Cron 任务为必填项"
	],
	[
		"Cron:",
		"Cron："
	],
	[
		"CUDA Support",
		"CUDA 支持"
	],
	[
		"Current",
		"当前"
	],
	[
		"Current origins",
		"当前可信源"
	],
	[
		"Current Password",
		"当前密码"
	],
	[
		"Current password is incorrect",
		"当前密码不正确"
	],
	[
		"Current plan:",
		"当前套餐："
	],
	[
		"Current plan: Legacy",
		"当前套餐：Legacy"
	],
	[
		"Current State",
		"当前状态"
	],
	[
		"currently assigned",
		"当前已分配"
	],
	[
		"Custom",
		"自定义"
	],
	[
		"Custom AI Providers",
		"自定义 AI 提供商"
	],
	[
		"Custom avatar",
		"自定义头像"
	],
	[
		"Custom certificate resolver",
		"自定义证书解析器"
	],
	[
		"Custom Certificate Resolver",
		"自定义证书解析器"
	],
	[
		"Custom command",
		"自定义命令"
	],
	[
		"Custom Command Updated",
		"自定义命令已更新"
	],
	[
		"Custom container name",
		"自定义容器名称"
	],
	[
		"Custom cron expression (e.g., 0 0 * * *)",
		"自定义 Cron 表达式（例如 0 0 * * *）"
	],
	[
		"Custom CSS",
		"自定义 CSS"
	],
	[
		"Custom Domains",
		"自定义域名"
	],
	[
		"Custom endpoint for VPC endpoints or API-compatible emulators",
		"用于 VPC 端点或 API 兼容模拟器的自定义端点"
	],
	[
		"Custom entry point must be specified",
		"必须指定自定义入口点"
	],
	[
		"Custom Entrypoint",
		"自定义入口点"
	],
	[
		"Custom pool detected on this server.",
		"已在此服务器上检测到自定义地址池"
	],
	[
		"Custom Presets",
		"自定义预设"
	],
	[
		"Custom providers saved successfully",
		"自定义提供商保存成功"
	],
	[
		"Custom Roles",
		"自定义角色"
	],
	[
		"Custom roles with fine-grained permissions are part of Dokploy Enterprise. Add a valid license to create and assign custom roles.",
		"具有细粒度权限的自定义角色是 Dokploy Enterprise 的一部分。请添加有效许可证以创建和分配自定义角色"
	],
	[
		"Custom roles:",
		"自定义角色："
	],
	[
		"Custom text displayed in the footer area.",
		"显示在页脚区域的自定义文本"
	],
	[
		"Custom URL for the \"Documentation\" link in the sidebar.",
		"侧边栏中“文档”链接的自定义 URL"
	],
	[
		"Custom URL for the \"Support\" link in the sidebar.",
		"侧边栏中“支持”链接的自定义 URL"
	],
	[
		"Customer:",
		"客户："
	],
	[
		"Customize the application name, logos, and favicon to match your brand identity.",
		"自定义应用名称、徽标和网站图标，以符合你的品牌形象"
	],
	[
		"Customize the error page messages shown to users.",
		"自定义向用户显示的错误页面消息"
	],
	[
		"Customize the look and feel of the application with custom CSS.",
		"使用自定义 CSS 调整应用的外观和风格"
	],
	[
		"Customize the page title, footer text, and sidebar links.",
		"自定义页面标题、页脚文本和侧边栏链接"
	],
	[
		"Daily Docker Cleanup",
		"每日 Docker 清理"
	],
	[
		"Danger Zone",
		"危险区域"
	],
	[
		"Dashboard",
		"仪表板"
	],
	[
		"data (Data Segment)",
		"data（数据段大小）"
	],
	[
		"Data points:",
		"数据点数："
	],
	[
		"Database",
		"数据库"
	],
	[
		"Database Backup",
		"数据库备份"
	],
	[
		"Database Created",
		"数据库创建成功"
	],
	[
		"Database Management",
		"数据库管理"
	],
	[
		"Database Name",
		"数据库名称"
	],
	[
		"Database name is required",
		"数据库名称为必填项"
	],
	[
		"Database Password",
		"数据库密码"
	],
	[
		"Database password is required for MariaDB",
		"MariaDB 必须填写数据库密码"
	],
	[
		"Database password is required for MongoDB",
		"MongoDB 必须填写数据库密码"
	],
	[
		"Database rebuilt successfully",
		"数据库重建成功"
	],
	[
		"Database required",
		"必须填写数据库"
	],
	[
		"Database Root password",
		"数据库 Root 密码"
	],
	[
		"Database Type",
		"数据库类型"
	],
	[
		"Database type is required for compose backups",
		"Compose 备份必须选择数据库类型"
	],
	[
		"Database User",
		"数据库用户"
	],
	[
		"Database user is required for MariaDB",
		"MariaDB 必须填写数据库用户"
	],
	[
		"Database user is required for MongoDB",
		"MongoDB 必须填写数据库用户"
	],
	[
		"Database user is required for PostgreSQL",
		"PostgreSQL 必须填写数据库用户"
	],
	[
		"Database:",
		"数据库："
	],
	[
		"Databases",
		"数据库"
	],
	[
		"Date",
		"日期"
	],
	[
		"Date range",
		"日期范围"
	],
	[
		"Deactivate",
		"停用"
	],
	[
		"Deactivate License Key",
		"停用许可证密钥"
	],
	[
		"Deactivate Requests",
		"停用请求日志"
	],
	[
		"Deactivated",
		"已停用"
	],
	[
		"Debug",
		"调试"
	],
	[
		"Decorate the notification with emojis.",
		"使用表情符号装饰通知"
	],
	[
		"Decoration",
		"表情符号装饰"
	],
	[
		"Default",
		"默认"
	],
	[
		"Default Command (",
		"默认命令 ("
	],
	[
		"Default Incoming",
		"默认入站规则"
	],
	[
		"Default organization",
		"默认组织"
	],
	[
		"Default organization updated",
		"默认组织已更新"
	],
	[
		"Default role for new members",
		"新成员的默认角色"
	],
	[
		"Default role updated",
		"默认角色已更新"
	],
	[
		"Default Runtime",
		"默认运行时"
	],
	[
		"Default: Deny (Recommended)",
		"默认：拒绝（推荐）"
	],
	[
		"Define a new role with specific permissions",
		"定义具有特定权限的新角色"
	],
	[
		"Define configuration files",
		"定义配置文件"
	],
	[
		"Define networks",
		"定义网络"
	],
	[
		"Define secrets",
		"定义密钥"
	],
	[
		"Define services",
		"定义服务"
	],
	[
		"Define volumes",
		"定义卷"
	],
	[
		"Define your own AI providers, like an internal LLM platform. When at least one is defined, only these providers can be used in AI configurations.",
		"定义您自己的 AI 提供商，例如内部 LLM 平台。定义至少一个后，AI 配置将只能使用这些提供商"
	],
	[
		"Delay (nanoseconds)",
		"延迟（纳秒）"
	],
	[
		"Delay between task rollbacks",
		"任务回滚之间的延迟"
	],
	[
		"Delay between task updates",
		"任务更新之间的延迟"
	],
	[
		"Delete",
		"删除"
	],
	[
		"Delete AI",
		"删除 AI 配置"
	],
	[
		"Delete all existing data and volumes",
		"删除所有现有数据和卷"
	],
	[
		"Delete API Key",
		"删除 API 密钥"
	],
	[
		"Delete Backup",
		"删除备份"
	],
	[
		"Delete backup files",
		"删除备份文件"
	],
	[
		"Delete Certificate",
		"删除证书"
	],
	[
		"Delete Deployment",
		"删除部署"
	],
	[
		"Delete Destination",
		"删除存储目标"
	],
	[
		"Delete DNS Provider",
		"删除 DNS 提供商"
	],
	[
		"Delete Domain",
		"删除域名"
	],
	[
		"Delete Environment",
		"删除环境"
	],
	[
		"Delete Environments",
		"删除环境"
	],
	[
		"Delete environments and their content",
		"删除环境及其内容"
	],
	[
		"Delete Git Provider",
		"删除 Git 提供商"
	],
	[
		"Delete image",
		"删除镜像"
	],
	[
		"Delete network",
		"删除网络"
	],
	[
		"Delete Node",
		"删除节点"
	],
	[
		"Delete Notification",
		"删除通知"
	],
	[
		"Delete Organization",
		"删除组织"
	],
	[
		"Delete patch",
		"删除补丁"
	],
	[
		"Delete Port",
		"删除端口"
	],
	[
		"Delete Preview",
		"删除预览"
	],
	[
		"Delete Projects",
		"删除项目"
	],
	[
		"Delete projects and all their content",
		"删除项目及其所有内容"
	],
	[
		"Delete Record",
		"删除记录"
	],
	[
		"Delete Redirect",
		"删除重定向"
	],
	[
		"Delete Registry",
		"删除镜像仓库"
	],
	[
		"Delete Role",
		"删除角色"
	],
	[
		"Delete Schedule",
		"删除定时任务"
	],
	[
		"Delete scheduled jobs",
		"删除定时任务"
	],
	[
		"Delete Secrets Provider",
		"删除密钥提供商"
	],
	[
		"Delete Security",
		"删除安全设置"
	],
	[
		"Delete Server",
		"删除服务器"
	],
	[
		"Delete Service",
		"删除服务"
	],
	[
		"Delete Services",
		"删除服务"
	],
	[
		"Delete services from projects",
		"从项目中删除服务"
	],
	[
		"Delete SSH Key",
		"删除 SSH 密钥"
	],
	[
		"Delete Tag",
		"删除标签"
	],
	[
		"Delete tags",
		"删除标签"
	],
	[
		"Delete User",
		"删除用户"
	],
	[
		"Delete volume",
		"删除卷"
	],
	[
		"Delete Volume",
		"删除卷"
	],
	[
		"Delete Volume Backup",
		"删除卷备份"
	],
	[
		"Delete volume backup files",
		"删除卷备份文件"
	],
	[
		"Delete volumes associated with services",
		"删除与服务关联的卷"
	],
	[
		"Delete volumes associated with this compose",
		"删除与此 Compose 关联的卷"
	],
	[
		"Deleted",
		"已删除"
	],
	[
		"Deleting...",
		"正在删除..."
	],
	[
		"Deletion unmarked",
		"已取消删除标记"
	],
	[
		"Deploy",
		"部署"
	],
	[
		"Deploy and scale your applications effortlessly to handle any workload.",
		"轻松部署和扩展应用，从容应对各种工作负载"
	],
	[
		"Deploy any application using Nixpacks, Heroku Buildpacks, or your own Dockerfile.",
		"使用 Nixpacks、Heroku Buildpacks 或您自己的 Dockerfile 部署任何应用"
	],
	[
		"Deploy Application",
		"部署应用"
	],
	[
		"Deploy applications in multiple programming languages to suit your needs.",
		"根据需要部署使用多种编程语言开发的应用"
	],
	[
		"Deploy authentication proxy",
		"部署认证代理"
	],
	[
		"Deploy complex applications natively with full Docker Compose integration.",
		"通过完整的 Docker Compose 集成，以原生方式部署复杂应用"
	],
	[
		"Deploy Compose",
		"部署 Compose"
	],
	[
		"Deploy for free with the open-source alternative to Netlify, Vercel, and Heroku.",
		"使用 Netlify、Vercel 和 Heroku 的开源替代方案免费部署"
	],
	[
		"Deploy Libsql",
		"部署 Libsql"
	],
	[
		"Deploy Mariadb",
		"部署 MariaDB"
	],
	[
		"Deploy Mongo",
		"部署 MongoDB"
	],
	[
		"Deploy MySQL",
		"部署 MySQL"
	],
	[
		"Deploy PostgreSQL",
		"部署 PostgreSQL"
	],
	[
		"Deploy Redis",
		"部署 Redis"
	],
	[
		"Deploy Server",
		"部署服务器"
	],
	[
		"Deploy Servers",
		"部署服务器"
	],
	[
		"Deploy servers are used to run your applications, databases, and services. They handle the deployment and execution of your projects.",
		"部署服务器用于运行您的应用、数据库和服务，负责项目的部署和执行"
	],
	[
		"Deploy Service",
		"部署服务"
	],
	[
		"Deploy Services",
		"部署服务"
	],
	[
		"Deploy services, manage env vars, domains, and view logs",
		"部署服务、管理环境变量和域名，并查看日志"
	],
	[
		"Deploy Settings",
		"部署设置"
	],
	[
		"Deploy the SSO proxy on",
		"将 SSO 代理部署到"
	],
	[
		"Deployed",
		"已部署"
	],
	[
		"Deployed as Swarm services",
		"已部署为 Swarm 服务"
	],
	[
		"Deployer",
		"部署者"
	],
	[
		"Deployment",
		"部署"
	],
	[
		"Deployment and authentication restrictions are part of Dokploy Enterprise. Add a valid license to configure them.",
		"部署和身份验证限制是 Dokploy 企业版功能。请添加有效许可证以进行配置"
	],
	[
		"Deployment cancellation only available in cloud version",
		"只有云版本支持取消部署"
	],
	[
		"Deployment cancellation requested",
		"已请求取消部署"
	],
	[
		"Deployment deleted successfully",
		"部署已成功删除"
	],
	[
		"Deployment is not running",
		"部署未运行"
	],
	[
		"Deployment jobs will appear here when they are queued.",
		"排队后的部署任务将显示在此处"
	],
	[
		"Deployment Logs",
		"部署日志"
	],
	[
		"Deployment queue cleaned",
		"部署队列已清理"
	],
	[
		"Deployment queued",
		"部署已加入队列"
	],
	[
		"Deployment saved",
		"部署已保存"
	],
	[
		"Deployment skipped: commit message contains skip keyword",
		"已跳过部署：提交信息包含跳过关键字"
	],
	[
		"Deployments",
		"部署"
	],
	[
		"Deployments from applications and compose will appear here.",
		"应用和 Compose 的部署将显示在此处"
	],
	[
		"Deployments referencing this provider will fail. Are you sure?",
		"引用此提供商的部署将会失败。确定要继续吗？"
	],
	[
		"Deploys / 7d",
		"部署次数 / 7 天"
	],
	[
		"Deprecated",
		"已弃用"
	],
	[
		"Describe the type of template you need, its purpose, and any specific features you'd like to include.",
		"描述你需要的模板类型、用途以及希望包含的具体功能"
	],
	[
		"Describe your needs",
		"描述你的需求"
	],
	[
		"Describe your template needs",
		"描述你的模板需求"
	],
	[
		"Description",
		"描述"
	],
	[
		"Description (optional)",
		"描述（可选）"
	],
	[
		"Description about your project...",
		"请输入项目描述..."
	],
	[
		"Description of your service...",
		"服务描述..."
	],
	[
		"Desired State",
		"期望状态"
	],
	[
		"Destination",
		"存储目标"
	],
	[
		"Destination deleted successfully",
		"存储目标已成功删除"
	],
	[
		"Destination is required",
		"必须选择存储目标"
	],
	[
		"Destination Path",
		"目标路径"
	],
	[
		"Destination required",
		"存储目标为必填项"
	],
	[
		"Detach dokploy-network",
		"断开与 dokploy-network 的连接"
	],
	[
		"Detach from dokploy-network",
		"断开与 dokploy-network 的连接"
	],
	[
		"Details of the request log entry.",
		"请求日志条目的详细信息"
	],
	[
		"Developer",
		"开发者"
	],
	[
		"Device",
		"设备"
	],
	[
		"Did you know you can deploy any number of applications that your server can handle?",
		"你知道吗？只要服务器能够承载，就可以部署任意数量的应用"
	],
	[
		"DigitalOcean - Get $200 Credits",
		"DigitalOcean - 获取 200 美元赠金"
	],
	[
		"Directory",
		"目录"
	],
	[
		"Disable",
		"禁用"
	],
	[
		"Disable 2FA",
		"禁用 2FA"
	],
	[
		"Disable Traefik Dashboard",
		"禁用 Traefik 仪表板"
	],
	[
		"Disabled",
		"已禁用"
	],
	[
		"Disabled (Recommended for key-based auth)",
		"已禁用（使用密钥验证时建议禁用）"
	],
	[
		"Disabled (Recommended)",
		"已禁用（推荐）"
	],
	[
		"Disabling...",
		"正在禁用..."
	],
	[
		"Disconnect Repository",
		"断开仓库连接"
	],
	[
		"Disconnecting will allow you to configure a new repository with your own git providers.",
		"断开连接后，您可以使用自己的 Git 提供商配置新仓库"
	],
	[
		"Discovery document is fetched from",
		"发现文档获取自"
	],
	[
		"Disk",
		"磁盘"
	],
	[
		"Disk (/)",
		"磁盘（/）"
	],
	[
		"Disk Space",
		"磁盘空间"
	],
	[
		"Disk Usage",
		"磁盘使用情况"
	],
	[
		"Displays the mobile sidebar.",
		"显示移动端侧边栏"
	],
	[
		"DNS Configuration Guide",
		"DNS 配置指南"
	],
	[
		"DNS provider created",
		"DNS 提供商已创建"
	],
	[
		"DNS provider deleted",
		"DNS 提供商已删除"
	],
	[
		"DNS provider updated",
		"DNS 提供商已更新"
	],
	[
		"DNS Providers",
		"DNS 提供商"
	],
	[
		"DNS Round Robin",
		"DNS 轮询"
	],
	[
		"DNS Valid",
		"DNS 有效"
	],
	[
		"Do you want to force the deletion? This may affect containers still using this image.",
		"是否要强制删除？这可能会影响仍在使用此镜像的容器"
	],
	[
		"Docker Build Stage",
		"Docker 构建阶段"
	],
	[
		"Docker Cleanup",
		"Docker 清理"
	],
	[
		"Docker Cleanup Error",
		"Docker 清理出错"
	],
	[
		"Docker Cleanup updated",
		"Docker 清理设置已更新"
	],
	[
		"Docker Containers",
		"Docker 容器"
	],
	[
		"Docker Context Path",
		"Docker 上下文路径"
	],
	[
		"Docker daemon errors (",
		"Docker 守护进程错误 ("
	],
	[
		"Docker daemon not responding",
		"Docker 守护进程无响应"
	],
	[
		"Docker Disk Usage",
		"Docker 磁盘使用情况"
	],
	[
		"Docker Events",
		"Docker 事件"
	],
	[
		"Docker File",
		"Dockerfile"
	],
	[
		"Docker Group",
		"Docker 用户组"
	],
	[
		"Docker image",
		"Docker 镜像"
	],
	[
		"Docker Image",
		"Docker 镜像"
	],
	[
		"docker image inspect output for \"",
		"以下镜像的 docker image inspect 输出：\""
	],
	[
		"Docker image is required",
		"Docker 镜像为必填项"
	],
	[
		"Docker images pulled or built on this server will appear here.",
		"在此服务器上拉取或构建的 Docker 镜像将显示在这里"
	],
	[
		"Docker Installed",
		"Docker 已安装"
	],
	[
		"docker network inspect output for \"",
		"以下网络的 docker network inspect 输出：\""
	],
	[
		"Docker networks",
		"Docker 网络"
	],
	[
		"Docker Provider Saved",
		"Docker 提供商已保存"
	],
	[
		"Docker Registry",
		"Docker 镜像仓库"
	],
	[
		"Docker Registry:",
		"Docker 镜像仓库："
	],
	[
		"Docker Swarm GPU Status",
		"Docker Swarm GPU 状态"
	],
	[
		"Docker Swarm Guide",
		"Docker Swarm 指南"
	],
	[
		"Docker Swarm Initialized",
		"Docker Swarm 已初始化"
	],
	[
		"Docker Swarm is active with",
		"Docker Swarm 已启用，共有"
	],
	[
		"Docker Swarm Overview",
		"Docker Swarm 概览"
	],
	[
		"Docker Terminal",
		"Docker 终端"
	],
	[
		"Docker Usage",
		"Docker 使用情况"
	],
	[
		"docker volume inspect output for \"",
		"docker volume inspect 输出：\""
	],
	[
		"Docker volumes created on this server will appear here.",
		"在此服务器上创建的 Docker 卷将显示在这里"
	],
	[
		"Docs",
		"文档"
	],
	[
		"Documentation URL",
		"文档 URL"
	],
	[
		"Dokploy (Local)",
		"Dokploy（本地）"
	],
	[
		"Dokploy Backup",
		"Dokploy 备份"
	],
	[
		"Dokploy Cloud Server",
		"Dokploy Cloud 服务器"
	],
	[
		"Dokploy Docs",
		"Dokploy 文档"
	],
	[
		"Dokploy Documentation",
		"Dokploy 文档"
	],
	[
		"Dokploy Network Created",
		"Dokploy 网络已创建"
	],
	[
		"Dokploy on GitHub",
		"加入 Dokploy Discord 服务器"
	],
	[
		"Dokploy Restart",
		"Dokploy 重启"
	],
	[
		"Dokploy server",
		"Dokploy 服务器"
	],
	[
		"Dokploy Server",
		"Dokploy 服务器"
	],
	[
		"Dokploy Server GPU Setup",
		"Dokploy 服务器 GPU 设置"
	],
	[
		"Domain",
		"域名"
	],
	[
		"Domain Assigned",
		"域名已分配"
	],
	[
		"Domain Created",
		"域名已创建"
	],
	[
		"Domain deleted successfully",
		"域名删除成功"
	],
	[
		"Domain disabled",
		"域名已禁用"
	],
	[
		"Domain enabled",
		"域名已启用"
	],
	[
		"Domain Host",
		"域名主机"
	],
	[
		"Domain is active. Toggle to disable routing without deleting it.",
		"域名已启用。切换此项可停止路由而无需删除域名"
	],
	[
		"Domain is disabled and not routed. Toggle to enable it again.",
		"域名已禁用，当前不会被路由。切换此项可重新启用"
	],
	[
		"Domain name cannot have leading or trailing spaces",
		"域名开头或结尾不能有空格"
	],
	[
		"Domain Updated",
		"域名已更新"
	],
	[
		"Domains",
		"域名"
	],
	[
		"Domains are used to access to the application",
		"域名用于访问应用"
	],
	[
		"Domains for",
		"以下提供商的域名："
	],
	[
		"Domains on this server protected with SSO will stop requiring authentication until re-enabled. Continue?",
		"此服务器上受 SSO 保护的域名将不再要求认证，直至重新启用。是否继续？"
	],
	[
		"Domains that rely on this provider to manage their records will need to be updated manually. Are you sure?",
		"依赖此提供商管理记录的域名将需要手动更新。确定要继续吗？"
	],
	[
		"Done",
		"已完成"
	],
	[
		"Download",
		"下载"
	],
	[
		"Download as JSON",
		"下载为 JSON"
	],
	[
		"Download logs",
		"下载日志"
	],
	[
		"Download logs as text file",
		"将日志下载为文本文件"
	],
	[
		"Download report",
		"下载报告"
	],
	[
		"Downloads and sets up the Libsql database",
		"下载并设置 Libsql 数据库"
	],
	[
		"Downloads and sets up the MariaDB database",
		"下载并设置 MariaDB 数据库"
	],
	[
		"Downloads and sets up the MongoDB database",
		"下载并设置 MongoDB 数据库"
	],
	[
		"Downloads and sets up the MySQL database",
		"下载并初始化 MySQL 数据库"
	],
	[
		"Downloads and sets up the PostgreSQL database",
		"下载并设置 PostgreSQL 数据库"
	],
	[
		"Downloads and sets up the Redis database",
		"下载并设置 Redis 数据库"
	],
	[
		"Downloads the source code and performs a complete build",
		"下载源代码并执行完整构建"
	],
	[
		"Draft",
		"草稿"
	],
	[
		"Driver",
		"驱动"
	],
	[
		"Driver (optional)",
		"驱动程序（可选）"
	],
	[
		"Driver options (optional)",
		"驱动选项（可选）"
	],
	[
		"Drop",
		"拖放"
	],
	[
		"Due Date",
		"到期日期"
	],
	[
		"Duplicate",
		"复制"
	],
	[
		"Duplicate Services",
		"复制服务"
	],
	[
		"Duplicate to",
		"复制到"
	],
	[
		"Duplicate to environment",
		"复制到环境"
	],
	[
		"Duplicate to new project",
		"复制到新项目"
	],
	[
		"Duplicating to environment...",
		"正在复制到环境..."
	],
	[
		"Duplicating to new project...",
		"正在复制到新项目..."
	],
	[
		"Duration to monitor for failure after rollback",
		"回滚后监测是否发生故障的时长"
	],
	[
		"Duration to monitor for failure after update",
		"更新后监测是否发生故障的时长"
	],
	[
		"e.g. 80",
		"例如 80"
	],
	[
		"e.g. 8080",
		"例如 8080"
	],
	[
		"e.g. com.docker.network.driver.mtu, com.docker.network.driver.host_binding",
		"例如 com.docker.network.driver.mtu、com.docker.network.driver.host_binding"
	],
	[
		"e.g. developer, viewer, deployer",
		"例如：开发者、查看者、部署者"
	],
	[
		"e.g. MacBook Touch ID",
		"例如 MacBook Touch ID"
	],
	[
		"E.g. production",
		"例如 production"
	],
	[
		"e.g., Production, Client, Internal",
		"例如：生产、客户、内部"
	],
	[
		"Each port mapping defines how external traffic reaches your containers through Traefik.",
		"每个端口映射都定义了外部流量如何通过 Traefik 到达容器"
	],
	[
		"Each server has its own authentication domain and proxy. Set an auth domain (e.g. auth.acme.com) per server, register its callback URL once in your identity provider, then deploy the proxy. Apps on that server under the same base domain are then one click to protect.",
		"每台服务器都有自己的认证域名和代理。请为每台服务器设置认证域名（例如 auth.acme.com），在身份提供商中注册一次其回调 URL，然后部署代理。之后，只需单击一下，即可保护该服务器上使用同一主域名的应用"
	],
	[
		"Easy way to access the server",
		"便捷访问服务器"
	],
	[
		"Easy way to access to docker container",
		"轻松访问 Docker 容器"
	],
	[
		"Edit",
		"编辑"
	],
	[
		"Edit AI",
		"编辑 AI 配置"
	],
	[
		"Edit and save Traefik configuration files",
		"编辑并保存 Traefik 配置文件"
	],
	[
		"Edit Environment",
		"编辑环境"
	],
	[
		"Edit environment-level shared environment variables",
		"编辑环境级共享环境变量"
	],
	[
		"Edit existing tags",
		"编辑现有标签"
	],
	[
		"Edit File",
		"编辑文件"
	],
	[
		"Edit Gitea Provider",
		"编辑 Gitea 提供商"
	],
	[
		"Edit organization",
		"编辑组织"
	],
	[
		"Edit patch",
		"编辑补丁"
	],
	[
		"Edit Patch",
		"编辑补丁"
	],
	[
		"Edit project-level shared environment variables",
		"编辑项目级共享环境变量"
	],
	[
		"Edit provider credentials and project/environment assignments",
		"编辑提供商凭据及项目/环境分配"
	],
	[
		"Edit provider credentials and update existing records",
		"编辑提供商凭据并更新现有记录"
	],
	[
		"Edit Record",
		"编辑记录"
	],
	[
		"Edit Role",
		"编辑角色"
	],
	[
		"Edit Server",
		"编辑服务器"
	],
	[
		"Efficiently manage your databases with intuitive tools.",
		"使用直观的工具高效管理数据库"
	],
	[
		"Effortlessly deploy your applications on remote servers, with zero configuration hassle.",
		"无需繁琐配置，即可轻松将应用部署到远程服务器"
	],
	[
		"Either applicationId or composeId must be provided",
		"必须提供 applicationId 或 composeId"
	],
	[
		"Email",
		"邮箱"
	],
	[
		"Email (Required for API Tokens)",
		"邮箱（使用 API 令牌时必填）"
	],
	[
		"Email domains that use this provider (sign-in by email and org assignment; subdomains matched automatically).",
		"使用此提供商的邮箱域名（用于通过邮箱登录以及将用户分配到组织；自动匹配子域名）"
	],
	[
		"Email is invalid",
		"邮箱格式无效"
	],
	[
		"Email is required",
		"邮箱为必填项"
	],
	[
		"Email must be a valid email",
		"请输入有效的邮箱地址"
	],
	[
		"Email must be at most 255 characters",
		"邮箱地址不能超过 255 个字符"
	],
	[
		"Email Provider",
		"邮件提供商"
	],
	[
		"Email provider not found",
		"未找到电子邮件提供商"
	],
	[
		"Email sent",
		"邮件已发送"
	],
	[
		"Email verified",
		"邮箱已验证"
	],
	[
		"Empty",
		"空"
	],
	[
		"Empty directory",
		"空目录"
	],
	[
		"Enable",
		"启用"
	],
	[
		"Enable 2FA",
		"启用 2FA"
	],
	[
		"Enable AI Features",
		"启用 AI 功能"
	],
	[
		"enable AI in your settings",
		"在设置中启用 AI"
	],
	[
		"Enable Docker Cleanup",
		"启用 Docker 清理"
	],
	[
		"Enable Enterprise Features",
		"启用企业功能"
	],
	[
		"Enable GPU",
		"启用 GPU"
	],
	[
		"Enable GPU Support?",
		"启用 GPU 支持？"
	],
	[
		"Enable IPv4",
		"启用 IPv4"
	],
	[
		"Enable IPv4 addressing on the network.",
		"为此网络启用 IPv4 地址"
	],
	[
		"Enable IPv6",
		"启用 IPv6"
	],
	[
		"Enable IPv6 addressing on the network.",
		"为此网络启用 IPv6 地址"
	],
	[
		"Enable Isolated Deployment",
		"启用隔离部署"
	],
	[
		"Enable Isolated Deployment (",
		"启用隔离部署 ("
	],
	[
		"Enable isolated deployment to the compose file.",
		"在 Compose 文件中启用隔离部署"
	],
	[
		"Enable Namespaces",
		"启用命名空间"
	],
	[
		"Enable or disable preview deployments for this application.",
		"启用或禁用此应用的预览部署"
	],
	[
		"Enable or disable the backup",
		"启用或禁用备份"
	],
	[
		"Enable preview deployments",
		"启用预览部署"
	],
	[
		"Enable Rate Limiting",
		"启用速率限制"
	],
	[
		"Enable Rollbacks",
		"启用回滚"
	],
	[
		"Enable Submodules",
		"启用子模块"
	],
	[
		"Enable this option to allow Dokploy Cloud administrators to temporarily access your account for troubleshooting and support purposes. This helps them quickly identify and resolve any issues you may encounter.",
		"启用此选项后，Dokploy Cloud 管理员可出于故障排查和支持目的临时访问您的账户，以便快速定位并解决您遇到的问题"
	],
	[
		"Enable Traefik Dashboard",
		"启用 Traefik 仪表板"
	],
	[
		"Enabled",
		"已启用"
	],
	[
		"Enabled (Password Authentication should be disabled)",
		"已启用（应禁用密码验证）"
	],
	[
		"Enabled (Recommended)",
		"已启用（推荐）"
	],
	[
		"Enabled (Should be disabled when using key-based auth)",
		"已启用（使用密钥验证时应禁用）"
	],
	[
		"enableEnterpriseFeatures must be provided",
		"必须提供 enableEnterpriseFeatures"
	],
	[
		"Endpoint",
		"端点"
	],
	[
		"Endpoint (optional)",
		"端点（可选）"
	],
	[
		"Endpoint is required",
		"必须填写端点"
	],
	[
		"Endpoint mode (vip or dnsrr)",
		"端点模式（vip 或 dnsrr）"
	],
	[
		"Endpoint Spec",
		"端点规范"
	],
	[
		"Endpoint spec updated successfully",
		"端点规范已成功更新"
	],
	[
		"Endpoint URL is required",
		"端点 URL 为必填项"
	],
	[
		"Endpoints for dokploy",
		"Dokploy 的端点"
	],
	[
		"Enforce SSO",
		"强制 SSO"
	],
	[
		"Enforce SSO updated",
		"强制 SSO 设置已更新"
	],
	[
		"Engine Version",
		"引擎版本"
	],
	[
		"Enter a label (e.g. enhancements, needs-review)",
		"输入标签（例如 enhancements、needs-review）"
	],
	[
		"Enter a path to watch (e.g., src/**, dist/*.js)",
		"输入要监视的路径（例如 src/**、dist/*.js）"
	],
	[
		"Enter a suffix (Optional, example: prod)",
		"输入后缀（可选，例如：prod）"
	],
	[
		"Enter a valid URL",
		"请输入有效的 URL"
	],
	[
		"Enter a valid URL (e.g. https://api.scaleway.com)",
		"请输入有效的 URL（例如 https://api.scaleway.com）"
	],
	[
		"Enter a valid URL (e.g. https://app.infisical.com)",
		"请输入有效的 URL（例如 https://app.infisical.com）"
	],
	[
		"Enter a valid URL (e.g. https://my-vault.vault.azure.net)",
		"请输入有效的 URL（例如 https://my-vault.vault.azure.net）"
	],
	[
		"Enter a valid URL (e.g. https://vault.example.com:8200)",
		"请输入有效的 URL（例如 https://vault.example.com:8200）"
	],
	[
		"Enter an auth domain first",
		"请先输入认证域名"
	],
	[
		"Enter Backup Code",
		"输入备用码"
	],
	[
		"Enter compose name to confirm",
		"输入 Compose 名称以确认"
	],
	[
		"Enter custom version (e.g., 0.15.4)",
		"输入自定义版本（例如 0.15.4）"
	],
	[
		"Enter database name",
		"输入数据库名称"
	],
	[
		"Enter database password",
		"输入数据库密码"
	],
	[
		"Enter database user",
		"输入数据库用户"
	],
	[
		"Enter entrypoint name manually",
		"手动输入入口点名称"
	],
	[
		"Enter initial password",
		"输入初始密码"
	],
	[
		"Enter model name (e.g. gpt-4o)",
		"输入模型名称（例如 gpt-4o）"
	],
	[
		"Enter one of the backup codes you received when setting up 2FA",
		"输入设置 2FA 时收到的一个备用码"
	],
	[
		"Enter one of your backup codes to access your account",
		"输入一个备用码以访问你的账户"
	],
	[
		"Enter only the hostname (e.g., aws_account_id.dkr.ecr.us-west-2.amazonaws.com).",
		"请仅输入主机名（例如 aws_account_id.dkr.ecr.us-west-2.amazonaws.com）"
	],
	[
		"Enter root password",
		"输入 root 密码"
	],
	[
		"Enter service name manually",
		"手动输入服务名称"
	],
	[
		"Enter the",
		"输入静态配置中定义的 Traefik 证书解析器的"
	],
	[
		"Enter the 6-digit code from your authenticator app",
		"输入身份验证器应用中的 6 位验证码"
	],
	[
		"Enter the custom certificate resolver",
		"请输入自定义证书解析器"
	],
	[
		"Enter the full path where the file should be uploaded in the container (e.g., /app/config.json)",
		"输入文件在容器中的完整上传路径（例如 /app/config.json）"
	],
	[
		"Enter the new",
		"请输入数据库的新"
	],
	[
		"Enter volume name",
		"输入卷名称"
	],
	[
		"Enter your backup code",
		"输入备用码"
	],
	[
		"Enter your Base64 configuration here...",
		"在此输入 Base64 配置..."
	],
	[
		"Enter your Bitbucket API Token",
		"输入你的 Bitbucket API 令牌"
	],
	[
		"Enter your Bitbucket App Password",
		"输入你的 Bitbucket 应用密码"
	],
	[
		"Enter your custom certificate resolver",
		"输入自定义证书解析器"
	],
	[
		"Enter your email and password to",
		"输入邮箱和密码以"
	],
	[
		"Enter your email and password to sign in",
		"输入邮箱和密码以登录"
	],
	[
		"Enter your email to reset your password",
		"输入邮箱以重置密码"
	],
	[
		"Enter your enterprise license key",
		"输入您的企业许可证密钥"
	],
	[
		"Enter your issuer",
		"输入颁发者"
	],
	[
		"Enter your metrics token",
		"输入您的指标令牌"
	],
	[
		"Enter your password",
		"输入您的密码"
	],
	[
		"Enter your password to begin 2FA setup",
		"输入密码以开始设置 2FA"
	],
	[
		"Enter your password to continue",
		"输入密码以继续"
	],
	[
		"Enter your password to enable 2FA",
		"输入密码以启用 2FA"
	],
	[
		"Enter your password to manage your 2FA settings",
		"输入密码以管理 2FA 设置"
	],
	[
		"Enter your work email",
		"请输入工作邮箱"
	],
	[
		"Enterprise Cloud Plan",
		"Enterprise Cloud 套餐"
	],
	[
		"Enterprise feature",
		"企业版功能"
	],
	[
		"Enterprise Features",
		"企业功能"
	],
	[
		"Enterprise features enabled",
		"企业功能已启用"
	],
	[
		"Enterprise features updated",
		"企业功能已更新"
	],
	[
		"Enterprise ready",
		"企业级就绪"
	],
	[
		"Enterprise SSO",
		"企业版 SSO"
	],
	[
		"Enterprise Whitelabeling",
		"企业版白标定制"
	],
	[
		"Enterprise-defined permissions.",
		"由企业定义的权限"
	],
	[
		"Entry point",
		"入口点"
	],
	[
		"Entrypoint",
		"入口点"
	],
	[
		"Entrypoint Name",
		"入口点名称"
	],
	[
		"Env",
		"环境变量"
	],
	[
		"Environment",
		"环境"
	],
	[
		"Environment created successfully",
		"环境创建成功"
	],
	[
		"Environment deleted successfully",
		"环境删除成功"
	],
	[
		"Environment description",
		"环境描述"
	],
	[
		"Environment duplicated successfully",
		"环境复制成功"
	],
	[
		"Environment is required",
		"环境为必填项"
	],
	[
		"Environment name",
		"环境名称"
	],
	[
		"Environment not found",
		"未找到环境"
	],
	[
		"Environment Settings",
		"环境变量设置"
	],
	[
		"Environment Shared Env Vars",
		"环境级共享环境变量"
	],
	[
		"Environment updated successfully",
		"环境更新成功"
	],
	[
		"Environment variables",
		"环境变量"
	],
	[
		"Environment Variables",
		"环境变量"
	],
	[
		"Environment variables updated successfully",
		"环境变量更新成功"
	],
	[
		"Environment:",
		"环境："
	],
	[
		"Environments",
		"环境"
	],
	[
		"Environments Added",
		"环境变量已添加"
	],
	[
		"Error",
		"错误"
	],
	[
		"Error accepting invitation",
		"接受邀请失败"
	],
	[
		"Error adding a registry",
		"添加镜像仓库时出错"
	],
	[
		"Error adding environment",
		"添加环境变量时出错"
	],
	[
		"Error adding environment variables",
		"添加环境变量时出错"
	],
	[
		"Error assigning the domain",
		"分配域名时出错"
	],
	[
		"Error cleaning all",
		"全部清理时出错"
	],
	[
		"Error cleaning deployment queue",
		"清理部署队列时出错"
	],
	[
		"Error cleaning Docker Builder",
		"清理 Docker 构建器时出错"
	],
	[
		"Error cleaning images",
		"清理镜像时出错"
	],
	[
		"Error cleaning Monitoring",
		"清理监控数据时出错"
	],
	[
		"Error cleaning Patch Caches",
		"清理补丁缓存时出错"
	],
	[
		"Error cleaning stopped containers",
		"清理已停止的容器时出错"
	],
	[
		"Error cleaning volumes",
		"清理卷时出错"
	],
	[
		"Error configuring Bitbucket",
		"配置 Bitbucket 时出错"
	],
	[
		"Error configuring GitLab",
		"配置 GitLab 时出错"
	],
	[
		"Error connecting to bucket",
		"连接存储桶时出错"
	],
	[
		"Error connecting to provider",
		"连接提供商时出错"
	],
	[
		"Error creating a database",
		"创建数据库时出错"
	],
	[
		"Error creating a notification",
		"创建通知时出错"
	],
	[
		"Error creating a project",
		"创建项目时出错"
	],
	[
		"Error creating a server",
		"创建服务器时出错"
	],
	[
		"Error creating network",
		"创建网络时出错"
	],
	[
		"Error creating security",
		"创建安全设置时出错"
	],
	[
		"Error creating tag",
		"创建标签时出错"
	],
	[
		"Error creating the application",
		"创建应用时出错"
	],
	[
		"Error creating the Backup",
		"创建备份时出错"
	],
	[
		"Error creating the Bind mount",
		"创建绑定挂载时出错"
	],
	[
		"Error creating the Certificate",
		"创建证书时出错"
	],
	[
		"Error creating the compose",
		"创建 Compose 时出错"
	],
	[
		"Error creating the destination",
		"创建存储目标时出错"
	],
	[
		"Error creating the domain",
		"创建域名时出错"
	],
	[
		"Error creating the File mount",
		"创建文件挂载时出错"
	],
	[
		"Error creating the manual backup",
		"创建手动备份时出错"
	],
	[
		"Error creating the notification",
		"创建通知时出错"
	],
	[
		"Error creating the port",
		"创建端口时出错"
	],
	[
		"Error creating the redirect",
		"创建重定向时出错"
	],
	[
		"Error creating the server",
		"创建服务器时出错"
	],
	[
		"Error creating the service",
		"创建服务时出错"
	],
	[
		"Error creating the SSH key",
		"创建 SSH 密钥时出错"
	],
	[
		"Error creating the Volume mount",
		"创建卷挂载时出错"
	],
	[
		"Error creating this Bitbucket provider",
		"创建此 Bitbucket 提供商时出错"
	],
	[
		"Error creating this Gitea provider",
		"创建此 Gitea 提供商时出错"
	],
	[
		"Error creating this Gitlab provider",
		"创建此 GitLab 提供商时出错"
	],
	[
		"Error deleting AI",
		"删除 AI 配置时出错"
	],
	[
		"Error deleting API key",
		"删除 API 密钥时出错"
	],
	[
		"Error deleting backup",
		"删除备份时出错"
	],
	[
		"Error deleting certificate",
		"删除证书时出错"
	],
	[
		"Error deleting deployment",
		"删除部署时出错"
	],
	[
		"Error deleting destination",
		"删除存储目标时出错"
	],
	[
		"Error deleting domain",
		"删除域名时出错"
	],
	[
		"Error deleting Git Provider",
		"删除 Git 提供商时出错"
	],
	[
		"Error deleting image",
		"删除镜像时出错"
	],
	[
		"Error deleting network",
		"删除网络时出错"
	],
	[
		"Error deleting node",
		"删除节点时出错"
	],
	[
		"Error deleting notification",
		"删除通知时出错"
	],
	[
		"Error deleting organization",
		"删除组织时出错"
	],
	[
		"Error deleting port",
		"删除端口时出错"
	],
	[
		"Error deleting redirect",
		"删除重定向时出错"
	],
	[
		"Error deleting registry configuration",
		"删除镜像仓库配置时出错"
	],
	[
		"Error deleting role",
		"删除角色时出错"
	],
	[
		"Error deleting schedule",
		"删除定时任务时出错"
	],
	[
		"Error deleting security",
		"删除安全设置时出错"
	],
	[
		"Error deleting SSH Key",
		"删除 SSH 密钥时出错"
	],
	[
		"Error deleting tag",
		"删除标签时出错"
	],
	[
		"Error deleting the DNS provider",
		"删除 DNS 提供商时出错"
	],
	[
		"Error deleting the record",
		"删除记录时出错"
	],
	[
		"Error deleting the secrets provider",
		"删除密钥提供商时出错"
	],
	[
		"Error deleting the service",
		"删除服务时出错"
	],
	[
		"Error deleting this project",
		"删除此项目时出错"
	],
	[
		"Error deleting user",
		"删除用户时出错"
	],
	[
		"Error deleting volume",
		"删除卷时出错"
	],
	[
		"Error deleting volume backup",
		"删除卷备份时出错"
	],
	[
		"Error deploying application",
		"部署应用时出错"
	],
	[
		"Error deploying Application",
		"部署应用时出错"
	],
	[
		"Error deploying applications on tag",
		"按标签部署应用时出错"
	],
	[
		"Error deploying compose",
		"部署 Compose 时出错"
	],
	[
		"Error deploying Compose",
		"部署 Compose 时出错"
	],
	[
		"Error deploying proxy",
		"部署代理时出错"
	],
	[
		"Error enabling 2FA",
		"启用 2FA 时出错"
	],
	[
		"Error fetching metrics",
		"获取指标时出错"
	],
	[
		"Error fetching metrics for",
		"获取以下对象的指标时出错："
	],
	[
		"Error fetching source type",
		"获取源类型时出错"
	],
	[
		"Error generating domain",
		"生成域名时出错"
	],
	[
		"Error generating preview",
		"生成预览时出错"
	],
	[
		"Error generating suggestions",
		"生成建议时出错"
	],
	[
		"Error generating the SSH Key",
		"生成 SSH 密钥时出错"
	],
	[
		"Error impersonating user",
		"模拟用户身份时出错"
	],
	[
		"Error importing compose",
		"导入 Compose 时出错"
	],
	[
		"Error importing networks",
		"导入网络时出错"
	],
	[
		"Error importing template",
		"导入模板时出错"
	],
	[
		"Error initiating rollback",
		"启动回滚时出错"
	],
	[
		"Error input: Inserting mongo database",
		"输入错误：插入 MongoDB 数据库失败"
	],
	[
		"Error input: Inserting MySQL database",
		"输入错误：插入 MySQL 数据库失败"
	],
	[
		"Error input: Inserting port",
		"输入错误：插入端口"
	],
	[
		"Error input: Inserting Postgres database",
		"输入错误：插入 Postgres 数据库失败"
	],
	[
		"Error input: Rolling back",
		"输入错误：正在回滚"
	],
	[
		"Error killing process",
		"终止进程时出错"
	],
	[
		"Error listing backup files",
		"列出备份文件时出错"
	],
	[
		"Error loading users",
		"加载用户时出错"
	],
	[
		"Error modifying the script",
		"修改脚本时出错"
	],
	[
		"Error Page Description",
		"错误页面描述"
	],
	[
		"Error Page Title",
		"错误页面标题"
	],
	[
		"Error Pages",
		"错误页面"
	],
	[
		"Error processing template",
		"处理模板时出错"
	],
	[
		"Error pruning build cache",
		"清理构建缓存时出错"
	],
	[
		"Error randomizing the compose",
		"随机化 Compose 时出错"
	],
	[
		"Error rebuilding application",
		"重新构建应用时出错"
	],
	[
		"Error rebuilding compose",
		"重新构建 Compose 时出错"
	],
	[
		"Error rebuilding database",
		"重建数据库时出错"
	],
	[
		"Error rebuilding preview deployment",
		"重新构建预览部署时出错"
	],
	[
		"Error recreating network",
		"重新创建网络时出错"
	],
	[
		"Error reloading application",
		"重新加载应用时出错"
	],
	[
		"Error reloading Libsql",
		"重新加载 Libsql 时出错"
	],
	[
		"Error reloading Mariadb",
		"重新加载 MariaDB 时出错"
	],
	[
		"Error reloading Mongo",
		"重新加载 MongoDB 时出错"
	],
	[
		"Error reloading MySQL",
		"重新加载 MySQL 时出错"
	],
	[
		"Error reloading PostgreSQL",
		"重新加载 PostgreSQL 时出错"
	],
	[
		"Error reloading Redis",
		"重新加载 Redis 时出错"
	],
	[
		"Error removing icon",
		"移除图标时出错"
	],
	[
		"Error removing proxy",
		"移除代理时出错"
	],
	[
		"Error removing record",
		"移除记录时出错"
	],
	[
		"Error removing the node",
		"移除节点时出错"
	],
	[
		"Error running manual Compose backup",
		"运行手动 Compose 备份时出错"
	],
	[
		"Error running manual Libsql backup",
		"运行手动 LibSQL 备份时出错"
	],
	[
		"Error running manual Mariadb backup",
		"运行手动 MariaDB 备份时出错"
	],
	[
		"Error running manual Mongo backup",
		"运行手动 MongoDB 备份时出错"
	],
	[
		"Error running manual MySQL backup",
		"运行手动 MySQL 备份时出错"
	],
	[
		"Error running schedule",
		"运行定时任务时出错"
	],
	[
		"Error running volume backup",
		"运行卷备份时出错"
	],
	[
		"Error saving auth domain",
		"保存认证域名时出错"
	],
	[
		"Error saving icon",
		"保存图标时出错"
	],
	[
		"Error saving the Bitbucket provider",
		"保存 Bitbucket 提供商时出错"
	],
	[
		"Error saving the build type",
		"保存构建类型时出错"
	],
	[
		"Error saving the deployment",
		"保存部署时出错"
	],
	[
		"Error saving the Docker provider",
		"保存 Docker 提供商时出错"
	],
	[
		"Error saving the external port",
		"保存外部端口时出错"
	],
	[
		"Error saving the external port/ports",
		"保存外部端口时出错"
	],
	[
		"Error saving the Git provider",
		"保存 Git 提供商时出错"
	],
	[
		"Error saving the Gitea provider",
		"保存 Gitea 提供商时出错"
	],
	[
		"Error saving the github provider",
		"保存 GitHub 提供商时出错"
	],
	[
		"Error saving the Github provider",
		"保存 GitHub 提供商时出错"
	],
	[
		"Error saving the gitlab provider",
		"保存 GitLab 提供商时出错"
	],
	[
		"Error saving the Gitlab provider",
		"保存 GitLab 提供商时出错"
	],
	[
		"Error sending the notification",
		"发送通知时出错"
	],
	[
		"Error setting default organization",
		"设置默认组织时出错"
	],
	[
		"Error setting up 2FA",
		"设置 2FA 时出错"
	],
	[
		"Error starting application",
		"启动应用时出错"
	],
	[
		"Error starting compose",
		"启动 Compose 时出错"
	],
	[
		"Error starting Libsql",
		"启动 Libsql 时出错"
	],
	[
		"Error starting Mariadb",
		"启动 MariaDB 时出错"
	],
	[
		"Error starting Mongo",
		"启动 MongoDB 时出错"
	],
	[
		"Error starting MySQL",
		"启动 MySQL 时出错"
	],
	[
		"Error starting PostgreSQL",
		"启动 PostgreSQL 时出错"
	],
	[
		"Error starting Redis",
		"启动 Redis 时出错"
	],
	[
		"Error stopping application",
		"停止应用时出错"
	],
	[
		"Error stopping compose",
		"停止 Compose 时出错"
	],
	[
		"Error stopping impersonation",
		"停止模拟用户身份时出错"
	],
	[
		"Error stopping Libsql",
		"停止 Libsql 时出错"
	],
	[
		"Error stopping Mariadb",
		"停止 MariaDB 时出错"
	],
	[
		"Error stopping Mongo",
		"停止 MongoDB 时出错"
	],
	[
		"Error stopping MySQL",
		"停止 MySQL 时出错"
	],
	[
		"Error stopping PostgreSQL",
		"停止 PostgreSQL 时出错"
	],
	[
		"Error stopping Redis",
		"停止 Redis 时出错"
	],
	[
		"Error testing the notification",
		"测试通知时出错"
	],
	[
		"Error testing the registry",
		"测试镜像仓库时出错"
	],
	[
		"Error unlinking user",
		"解除用户关联时出错"
	],
	[
		"Error updating a notification",
		"更新通知时出错"
	],
	[
		"Error updating a project",
		"更新项目时出错"
	],
	[
		"Error updating a registry",
		"更新镜像仓库时出错"
	],
	[
		"Error updating a server",
		"更新服务器时出错"
	],
	[
		"Error updating application",
		"更新应用时出错"
	],
	[
		"Error updating Auto Deploy",
		"更新自动部署设置时出错"
	],
	[
		"Error updating Bitbucket",
		"更新 Bitbucket 时出错"
	],
	[
		"Error updating build server settings",
		"更新构建服务器设置时出错"
	],
	[
		"Error updating builds concurrency",
		"更新构建并发数时出错"
	],
	[
		"Error updating Clean Cache",
		"更新清理缓存设置时出错"
	],
	[
		"Error updating default role",
		"更新默认角色时出错"
	],
	[
		"Error updating endpoint spec",
		"更新端点规范时出错"
	],
	[
		"Error updating Enforce SSO",
		"更新强制 SSO 设置时出错"
	],
	[
		"Error updating Gitea provider",
		"更新 Gitea 提供商时出错"
	],
	[
		"Error updating Github",
		"更新 GitHub 时出错"
	],
	[
		"Error updating Gitlab",
		"更新 GitLab 时出错"
	],
	[
		"Error updating health check",
		"更新健康检查时出错"
	],
	[
		"Error updating labels",
		"更新标签时出错"
	],
	[
		"Error updating Libsql",
		"更新 LibSQL 数据库时出错"
	],
	[
		"Error updating mode",
		"更新模式时出错"
	],
	[
		"Error updating mongo database",
		"更新 MongoDB 数据库时出错"
	],
	[
		"Error updating MySQL",
		"更新 MySQL 时出错"
	],
	[
		"Error updating network configuration",
		"更新网络配置时出错"
	],
	[
		"Error updating networks",
		"更新网络时出错"
	],
	[
		"Error updating password",
		"更新密码时出错"
	],
	[
		"Error updating placement",
		"更新放置配置时出错"
	],
	[
		"Error updating Postgres",
		"更新 Postgres 时出错"
	],
	[
		"Error updating Redis",
		"更新 Redis 时出错"
	],
	[
		"Error updating registry",
		"更新镜像仓库时出错"
	],
	[
		"Error updating Remote Servers Only",
		"更新仅远程服务器设置时出错"
	],
	[
		"Error updating restart policy",
		"更新重启策略时出错"
	],
	[
		"Error updating role",
		"更新角色时出错"
	],
	[
		"Error updating rollback config",
		"更新回滚配置时出错"
	],
	[
		"Error updating sharing",
		"更新共享设置时出错"
	],
	[
		"Error updating SSO authentication",
		"更新 SSO 身份验证时出错"
	],
	[
		"Error updating stop grace period",
		"更新停止宽限期时出错"
	],
	[
		"Error updating subscription",
		"更新订阅时出错"
	],
	[
		"Error updating tag",
		"更新标签时出错"
	],
	[
		"Error updating the Application",
		"更新应用时出错"
	],
	[
		"Error updating the Bind mount",
		"更新绑定挂载时出错"
	],
	[
		"Error updating the Certificate",
		"更新证书时出错"
	],
	[
		"Error updating the command",
		"更新命令时出错"
	],
	[
		"Error updating the compose",
		"更新 Compose 时出错"
	],
	[
		"Error updating the Compose",
		"更新 Compose 时出错"
	],
	[
		"Error updating the Compose config",
		"更新 Compose 配置时出错"
	],
	[
		"Error updating the custom command",
		"更新自定义命令时出错"
	],
	[
		"Error updating the domain",
		"更新域名时出错"
	],
	[
		"Error updating the env",
		"更新环境变量时出错"
	],
	[
		"Error updating the environment variables",
		"更新环境变量时出错"
	],
	[
		"Error updating the File mount",
		"更新文件挂载时出错"
	],
	[
		"Error updating the IP of the server",
		"更新服务器 IP 时出错"
	],
	[
		"Error updating the Libsql",
		"更新 Libsql 时出错"
	],
	[
		"Error updating the Mariadb",
		"更新 MariaDB 时出错"
	],
	[
		"Error updating the notification",
		"更新通知时出错"
	],
	[
		"Error updating the permissions",
		"更新权限时出错"
	],
	[
		"Error updating the port",
		"更新端口时出错"
	],
	[
		"Error updating the profile",
		"更新个人资料时出错"
	],
	[
		"Error updating the redirect",
		"更新重定向时出错"
	],
	[
		"Error updating the refresh token",
		"更新刷新令牌时出错"
	],
	[
		"Error updating the resources",
		"更新资源设置时出错"
	],
	[
		"Error updating the security",
		"更新安全设置时出错"
	],
	[
		"Error updating the server",
		"更新服务器时出错"
	],
	[
		"Error updating the SSH key",
		"更新 SSH 密钥时出错"
	],
	[
		"Error updating the Traefik config",
		"更新 Traefik 配置时出错"
	],
	[
		"Error updating the Traefik env",
		"更新 Traefik 环境变量时出错"
	],
	[
		"Error updating the Volume mount",
		"更新卷挂载时出错"
	],
	[
		"Error updating this SSH key",
		"更新此 SSH 密钥时出错"
	],
	[
		"Error updating Traefik ports",
		"更新 Traefik 端口时出错"
	],
	[
		"Error updating update config",
		"更新配置时出错"
	],
	[
		"Error upgrading plan",
		"升级套餐时出错"
	],
	[
		"Error verifying 2FA code",
		"验证 2FA 代码时出错"
	],
	[
		"Error verifying networks",
		"验证网络时出错"
	],
	[
		"Error:",
		"错误："
	],
	[
		"Errors",
		"错误"
	],
	[
		"Events",
		"事件"
	],
	[
		"Events reported by the Docker daemon, equivalent to running \"docker events\".",
		"Docker 守护进程报告的事件，相当于运行“docker events”"
	],
	[
		"Every 15 minutes",
		"每 15 分钟"
	],
	[
		"Every day at midnight",
		"每天午夜"
	],
	[
		"Every hour",
		"每小时"
	],
	[
		"Every minute",
		"每分钟"
	],
	[
		"Every month on the 1st at midnight",
		"每月 1 日午夜"
	],
	[
		"Every Sunday at midnight",
		"每周日午夜"
	],
	[
		"Every weekday at midnight",
		"每个工作日午夜"
	],
	[
		"Everything an individual developer needs",
		"个人开发者所需的一切"
	],
	[
		"Example: 0 0 * * * (daily at midnight)",
		"示例：0 0 * * *（每天午夜）"
	],
	[
		"Examples:",
		"示例："
	],
	[
		"Examples: 30000000000 (30s), 120000000000 (2m)",
		"示例：30000000000（30 秒）、120000000000（2 分钟）"
	],
	[
		"Exclude Services",
		"排除服务"
	],
	[
		"Exec Time:",
		"执行耗时："
	],
	[
		"Existing environment",
		"现有环境"
	],
	[
		"Existing providers",
		"现有提供商"
	],
	[
		"Expand commit message",
		"展开提交信息"
	],
	[
		"Expiration",
		"过期时间"
	],
	[
		"Expire (seconds)",
		"过期时间（秒）"
	],
	[
		"Expired",
		"已过期"
	],
	[
		"Expires",
		"过期时间"
	],
	[
		"Expires At",
		"过期时间"
	],
	[
		"Expires in",
		"距离过期还有"
	],
	[
		"Expires:",
		"到期时间："
	],
	[
		"Expose ports",
		"暴露端口"
	],
	[
		"Expose ports without publishing them",
		"暴露端口但不将其发布到主机"
	],
	[
		"Express dependency between services",
		"定义服务之间的依赖关系"
	],
	[
		"External Admin Port (Internet)",
		"外部管理端口（互联网）"
	],
	[
		"External Credentials",
		"外部连接凭据"
	],
	[
		"External GRPC Host",
		"外部 GRPC 主机"
	],
	[
		"External GRPC Port (Internet)",
		"外部 GRPC 端口（互联网）"
	],
	[
		"External Host",
		"外部主机"
	],
	[
		"External Port (Internet)",
		"外部端口（互联网）"
	],
	[
		"External Port updated",
		"外部端口已更新"
	],
	[
		"External port/ports updated",
		"外部端口已更新"
	],
	[
		"externalGRPCPort cannot be set when sqldNode is 'replica'",
		"当 sqldNode 为“replica”时，不能设置 externalGRPCPort"
	],
	[
		"Extra",
		"其他"
	],
	[
		"Fail2Ban (Fail2Ban) is a service that can be used to prevent brute force attacks on your server.",
		"Fail2Ban 是一项可用于防止服务器遭受暴力破解攻击的服务"
	],
	[
		"Failed to activate license key",
		"激活许可证密钥失败"
	],
	[
		"Failed to add passkey",
		"无法添加通行密钥"
	],
	[
		"Failed to add trusted origin",
		"添加可信源失败"
	],
	[
		"Failed to assign tags to project",
		"无法为项目分配标签"
	],
	[
		"Failed to cancel deployment",
		"取消部署失败"
	],
	[
		"Failed to create file",
		"文件创建失败"
	],
	[
		"Failed to create organization",
		"创建组织失败"
	],
	[
		"Failed to create user",
		"创建用户失败"
	],
	[
		"Failed to deactivate license key",
		"停用许可证密钥失败"
	],
	[
		"Failed to delete",
		"删除失败"
	],
	[
		"Failed to delete environment",
		"删除环境失败"
	],
	[
		"Failed to delete SCIM provider",
		"删除 SCIM 提供商失败"
	],
	[
		"Failed to disable 2FA. Please try again.",
		"无法禁用 2FA，请重试"
	],
	[
		"Failed to duplicate environment",
		"复制环境失败"
	],
	[
		"Failed to enable enterprise features",
		"启用企业功能失败"
	],
	[
		"Failed to enable GPU support. Please check server logs.",
		"启用 GPU 支持失败。请检查服务器日志"
	],
	[
		"Failed to fetch metrics, Please check your monitoring Instance is Configured correctly.",
		"获取指标失败，请检查监控实例是否配置正确"
	],
	[
		"Failed to find Gitea provider",
		"未找到 Gitea 提供商"
	],
	[
		"Failed to generate API key",
		"生成 API 密钥失败"
	],
	[
		"Failed to generate SCIM token",
		"生成 SCIM 令牌失败"
	],
	[
		"Failed to get Gitea ID from response",
		"无法从响应中获取 Gitea ID"
	],
	[
		"Failed to link account",
		"关联账户失败"
	],
	[
		"Failed to load backups.",
		"备份加载失败"
	],
	[
		"Failed to load data",
		"数据加载失败"
	],
	[
		"Failed to Load Services",
		"加载服务失败"
	],
	[
		"Failed to mark file for deletion",
		"无法将文件标记为待删除"
	],
	[
		"Failed to move application",
		"移动应用失败"
	],
	[
		"Failed to move compose",
		"移动 Compose 失败"
	],
	[
		"Failed to move libsql",
		"移动 LibSQL 数据库失败"
	],
	[
		"Failed to move mariadb",
		"移动 MariaDB 数据库失败"
	],
	[
		"Failed to move mongo",
		"移动 MongoDB 数据库失败"
	],
	[
		"Failed to move mysql",
		"移动 MySQL 数据库失败"
	],
	[
		"Failed to move postgres",
		"移动 Postgres 数据库失败"
	],
	[
		"Failed to move redis",
		"移动 Redis 失败"
	],
	[
		"Failed to parse backup files list",
		"解析备份文件列表失败"
	],
	[
		"Failed to refresh GPU status",
		"刷新 GPU 状态失败"
	],
	[
		"Failed to regenerate backup codes",
		"无法重新生成备份代码"
	],
	[
		"Failed to register SAML provider",
		"注册 SAML 提供商失败"
	],
	[
		"Failed to register SSO provider",
		"注册 SSO 提供商失败"
	],
	[
		"Failed to reload Traefik. Please try again.",
		"无法重新加载 Traefik，请重试"
	],
	[
		"Failed to remove passkey",
		"无法移除通行密钥"
	],
	[
		"Failed to remove provider",
		"移除提供商失败"
	],
	[
		"Failed to remove trusted origin",
		"移除可信源失败"
	],
	[
		"Failed to reset whitelabeling settings",
		"重置白标设置失败"
	],
	[
		"Failed to revoke session",
		"撤销会话失败"
	],
	[
		"Failed to save AI settings",
		"保存 AI 设置失败"
	],
	[
		"Failed to save custom providers",
		"保存自定义提供商失败"
	],
	[
		"Failed to save file",
		"保存文件失败"
	],
	[
		"Failed to save patch",
		"补丁保存失败"
	],
	[
		"Failed to sign in with passkey",
		"使用通行密钥登录失败"
	],
	[
		"Failed to sign in with SSO",
		"使用 SSO 登录失败"
	],
	[
		"Failed to store access token",
		"保存访问令牌失败"
	],
	[
		"Failed to toggle dashboard. Please check if port 8080 is available.",
		"无法切换仪表板状态。请检查端口 8080 是否可用"
	],
	[
		"Failed to unlink account",
		"取消关联账户失败"
	],
	[
		"Failed to unmark deletion",
		"取消删除标记失败"
	],
	[
		"Failed to update bookmark",
		"更新书签失败"
	],
	[
		"Failed to update enterprise features",
		"更新企业功能失败"
	],
	[
		"Failed to update enterprise settings",
		"更新企业版设置失败"
	],
	[
		"Failed to update invoice notifications",
		"更新账单通知失败"
	],
	[
		"Failed to update rollback settings",
		"更新回滚设置失败"
	],
	[
		"Failed to update trusted origin",
		"更新可信源失败"
	],
	[
		"Failed to update user",
		"更新用户失败"
	],
	[
		"Failed to update whitelabeling settings",
		"更新白标设置失败"
	],
	[
		"Failed to upload file to container",
		"无法将文件上传到容器"
	],
	[
		"Failed to validate license key",
		"验证许可证密钥失败"
	],
	[
		"Failure Action",
		"失败操作"
	],
	[
		"Favicon URL",
		"网站图标 URL"
	],
	[
		"Feature disabled on cloud",
		"此功能在云端已禁用"
	],
	[
		"Fetch: Will clone the repository and load the services",
		"拉取：克隆仓库并加载服务"
	],
	[
		"Fetched source type",
		"已获取源类型"
	],
	[
		"File",
		"文件"
	],
	[
		"File created",
		"文件已创建"
	],
	[
		"File marked for deletion",
		"文件已标记为待删除"
	],
	[
		"File Mount",
		"文件挂载"
	],
	[
		"File Path",
		"文件路径"
	],
	[
		"File path required",
		"必须填写文件路径"
	],
	[
		"File saved",
		"文件已保存"
	],
	[
		"File uploaded successfully",
		"文件上传成功"
	],
	[
		"Filename",
		"文件名"
	],
	[
		"Fill from server (optional)",
		"使用服务器信息填充（可选）"
	],
	[
		"Fill in the following fields to add an external registry.",
		"填写以下字段以添加外部镜像仓库"
	],
	[
		"Fill the form below to create your account",
		"填写下方表单以创建账户"
	],
	[
		"Fill the next fields.",
		"填写以下字段"
	],
	[
		"Filter by host...",
		"按主机名筛选..."
	],
	[
		"Filter by hostname...",
		"按主机名筛选..."
	],
	[
		"Filter by name...",
		"按名称筛选..."
	],
	[
		"Filter by server...",
		"按服务器筛选..."
	],
	[
		"Filter by state",
		"按状态筛选"
	],
	[
		"Filter by type, action or name...",
		"按类型、操作或名称筛选..."
	],
	[
		"Filter by user...",
		"按用户筛选..."
	],
	[
		"Filter projects...",
		"筛选项目..."
	],
	[
		"Filter services...",
		"筛选服务..."
	],
	[
		"Find Environment...",
		"查找环境..."
	],
	[
		"Find Project...",
		"查找项目..."
	],
	[
		"Find Service...",
		"查找服务..."
	],
	[
		"Finished",
		"完成时间"
	],
	[
		"First Name",
		"名字"
	],
	[
		"First name is required",
		"名为必填项"
	],
	[
		"first to enable rollbacks.",
		"，然后再启用回滚"
	],
	[
		"Flag cannot be empty",
		"参数不能为空"
	],
	[
		"Flags",
		"标志"
	],
	[
		"Follow the steps to add a new node to your cluster, before you start using this feature, you need to understand how docker swarm works.",
		"按照以下步骤向集群添加新节点。使用此功能前，你需要了解 Docker Swarm 的工作原理"
	],
	[
		"Follow these steps to configure your DNS records for",
		"按照以下步骤为此域名配置 DNS 记录："
	],
	[
		"Footer Text",
		"页脚文本"
	],
	[
		"for any breaking changes before updating.",
		"，了解是否存在破坏性变更"
	],
	[
		"for best practices and optimization recommendations. Builders are suitable for development and prototyping purposes when you have sufficient resources available.",
		"以了解最佳实践和优化建议。如果有足够的可用资源，构建器适用于开发和原型设计"
	],
	[
		"For custom cleanup strategies, use",
		"如需自定义清理策略，请在 Web 服务器或远程服务器上使用"
	],
	[
		"for JSON secrets",
		"用于 JSON 密钥"
	],
	[
		"For large organizations who want more control",
		"适合希望获得更多控制权的大型组织"
	],
	[
		"For organization accounts",
		"用于组织账户"
	],
	[
		"For organization/group access use the slug name of the group eg: my-org",
		"如需访问组织/组，请使用组的短名称，例如：my-org"
	],
	[
		"for secrets in a path, or",
		"用于引用路径中的密钥，或"
	],
	[
		"for the database",
		"。"
	],
	[
		"for the root domain.",
		"表示根域名"
	],
	[
		"Forbidden",
		"禁止访问"
	],
	[
		"Force delete",
		"强制删除"
	],
	[
		"Found",
		"发现"
	],
	[
		"Found in Docker (",
		"在 Docker 中找到 ("
	],
	[
		"From Address",
		"发件人地址"
	],
	[
		"From Address is required",
		"发件地址为必填项"
	],
	[
		"fsize (File Size)",
		"fsize（文件大小）"
	],
	[
		"Full API and CLI access to fit any custom workflow.",
		"提供完整的 API 和 CLI 访问权限，可适配任何自定义工作流"
	],
	[
		"Full infrastructure access: servers, registries, certs, backups, and deployments",
		"完整的基础设施访问权限：服务器、镜像仓库、证书、备份和部署"
	],
	[
		"Functionality not available in cloud version",
		"云版本不支持此功能"
	],
	[
		"Gateway",
		"网关"
	],
	[
		"Gateway and IP range require a subnet",
		"设置网关和 IP 范围前必须先设置子网"
	],
	[
		"GB of",
		"GB，共"
	],
	[
		"GB reserved ·",
		"GB 已预留 ·"
	],
	[
		"GB total",
		"GB"
	],
	[
		"GB used",
		"GB（已使用）"
	],
	[
		"General",
		"常规"
	],
	[
		"Generate",
		"生成"
	],
	[
		"Generate and manage API keys to access the API/CLI",
		"生成和管理用于访问 API/CLI 的密钥"
	],
	[
		"Generate API Key",
		"生成 API 密钥"
	],
	[
		"Generate ED25519 SSH Key",
		"生成 ED25519 SSH 密钥"
	],
	[
		"Generate new backup codes to replace your existing ones. This will invalidate all previous backup codes.",
		"生成新的备份代码以替换现有代码。这将使之前的所有备份代码失效"
	],
	[
		"Generate New Key",
		"生成新密钥"
	],
	[
		"Generate new token",
		"生成新令牌"
	],
	[
		"Generate password",
		"生成密码"
	],
	[
		"Generate RSA SSH Key",
		"生成 RSA SSH 密钥"
	],
	[
		"Generate sslip.io domain",
		"生成 sslip.io 域名"
	],
	[
		"Generate token for a new provider",
		"为新提供商生成令牌"
	],
	[
		"Generating compose preview...",
		"正在生成 Compose 预览..."
	],
	[
		"Generating template suggestions based on your input...",
		"正在根据你的输入生成模板建议..."
	],
	[
		"Get full visibility into every action performed across your organization. Audit logs are available as part of Dokploy Enterprise.",
		"全面了解组织内执行的每项操作。审计日志是 Dokploy Enterprise 的一项功能"
	],
	[
		"Get Started",
		"开始使用"
	],
	[
		"Get started quickly with pre-configured templates for Supabase, Cal.com, PocketBase, and more.",
		"借助 Supabase、Cal.com、PocketBase 等预配置模板快速上手"
	],
	[
		"Git Provider Assignment",
		"分配 Git 提供商"
	],
	[
		"Git Provider deleted successfully",
		"Git 提供商删除成功"
	],
	[
		"Git Provider Saved",
		"Git 提供商已保存"
	],
	[
		"Git Providers",
		"Git 提供商"
	],
	[
		"Gitea Account",
		"Gitea 账户"
	],
	[
		"Gitea Connection Failed",
		"Gitea 连接失败"
	],
	[
		"Gitea Connection Verified",
		"Gitea 连接验证成功"
	],
	[
		"Gitea Not Connected",
		"Gitea 尚未连接"
	],
	[
		"Gitea Provider",
		"Gitea 提供商"
	],
	[
		"Gitea provider created successfully",
		"Gitea 提供商创建成功"
	],
	[
		"Gitea provider ID is required.",
		"必须提供 Gitea 提供商 ID"
	],
	[
		"Gitea provider ID, owner, and repository name are required.",
		"必须提供 Gitea 提供商 ID、所有者和仓库名称"
	],
	[
		"Gitea Provider is required",
		"必须选择 Gitea 提供商"
	],
	[
		"Gitea provider updated successfully",
		"Gitea 提供商更新成功"
	],
	[
		"Gitea URL is required",
		"必须填写 Gitea URL"
	],
	[
		"Github Account",
		"GitHub 账户"
	],
	[
		"Github Installation not found",
		"未找到 GitHub 安装"
	],
	[
		"Github Provider",
		"GitHub 提供商"
	],
	[
		"Github Provider is required",
		"必须选择 GitHub 提供商"
	],
	[
		"Github provider not found",
		"未找到 GitHub 提供商"
	],
	[
		"Github updated successfully",
		"GitHub 更新成功"
	],
	[
		"Github Webhook Secret not set",
		"未设置 GitHub Webhook 密钥"
	],
	[
		"Gitlab Account",
		"GitLab 账户"
	],
	[
		"GitLab created successfully",
		"GitLab 创建成功"
	],
	[
		"GitLab Provider",
		"GitLab 提供商"
	],
	[
		"Gitlab Provider is required",
		"必须选择 GitLab 提供商"
	],
	[
		"Gitlab updated successfully",
		"GitLab 更新成功"
	],
	[
		"Gitlab Url",
		"GitLab URL"
	],
	[
		"Gitlab URL",
		"GitLab URL"
	],
	[
		"GitLab URL is required",
		"GitLab URL 为必填项"
	],
	[
		"Global",
		"全局模式"
	],
	[
		"Go to",
		"前往"
	],
	[
		"Go to homepage",
		"前往首页"
	],
	[
		"Go to License",
		"前往许可证页面"
	],
	[
		"Go to projects",
		"前往项目"
	],
	[
		"Go to your Gitea settings",
		"前往 Gitea 设置"
	],
	[
		"Go to your GitLab profile settings",
		"前往 GitLab 个人资料设置"
	],
	[
		"GPU Configuration",
		"GPU 配置"
	],
	[
		"GPU Memory",
		"GPU 显存"
	],
	[
		"GPU Model",
		"GPU 型号"
	],
	[
		"GPU Setup",
		"GPU 设置"
	],
	[
		"GPU support enabled successfully",
		"GPU 支持已成功启用"
	],
	[
		"Group Name (Optional, Comma-Separated List)",
		"组名称（可选，多个名称用逗号分隔）"
	],
	[
		"Hard Limit",
		"硬限制"
	],
	[
		"Having rollbacks enabled increases storage usage. Be careful with this option. Note that manually cleaning the cache may delete rollback images, making them unavailable for future rollbacks.",
		"启用回滚会增加存储空间占用，请谨慎使用此选项。请注意，手动清理缓存可能会删除回滚镜像，导致以后无法使用这些镜像进行回滚"
	],
	[
		"Headers",
		"请求头"
	],
	[
		"Health",
		"健康状态"
	],
	[
		"Health Check",
		"健康检查"
	],
	[
		"Health check failed",
		"健康检查失败"
	],
	[
		"Health check updated successfully",
		"健康检查已成功更新"
	],
	[
		"Helpful resources:",
		"实用资源："
	],
	[
		"Here are some of the things you can do with Dokploy Cloud:",
		"以下是你可以使用 Dokploy Cloud 完成的一些操作："
	],
	[
		"Heroku Version (Default: 24)",
		"Heroku 版本（默认：24）"
	],
	[
		"Heroku Version (Optional)",
		"Heroku 版本（可选）"
	],
	[
		"Hetzner - Get €20 Credits",
		"Hetzner - 获取 20 欧元赠金"
	],
	[
		"Hey! Looks like the build has been running for more than 10 minutes. Would you like to cancel this deployment?",
		"构建似乎已运行超过 10 分钟。是否要取消此次部署？"
	],
	[
		"Hi, From Dokploy 👋",
		"你好，这是来自 Dokploy 的问候 👋"
	],
	[
		"Hide token",
		"隐藏令牌"
	],
	[
		"Home",
		"首页"
	],
	[
		"Host",
		"主机"
	],
	[
		"Host Mode Limitation:",
		"主机模式限制："
	],
	[
		"Host Path",
		"主机路径"
	],
	[
		"Host path required",
		"必须填写主机路径"
	],
	[
		"Host resources",
		"主机资源"
	],
	[
		"Host:",
		"主机："
	],
	[
		"Hostinger - Get 20% Discount",
		"Hostinger - 获取 20% 折扣"
	],
	[
		"Hostinger Server",
		"Hostinger 服务器"
	],
	[
		"Hostname",
		"主机名"
	],
	[
		"How long to keep retrying (max 10800 seconds / 3 hours).",
		"持续重试的时长（最长 10800 秒 / 3 小时）"
	],
	[
		"How many recent backups to keep. Empty means no cleanup.",
		"要保留的最近备份数量。留空表示不清理"
	],
	[
		"How often (in seconds) to retry. Minimum 30 seconds.",
		"重试的时间间隔（秒）。最短 30 秒"
	],
	[
		"How often to refill the request limit",
		"请求额度的补充频率"
	],
	[
		"HTTP & HTTPS",
		"HTTP 和 HTTPS"
	],
	[
		"HTTP only",
		"仅 HTTP"
	],
	[
		"HTTPS only",
		"仅 HTTPS"
	],
	[
		"Icon removed",
		"图标已移除"
	],
	[
		"Icon saved successfully",
		"图标保存成功"
	],
	[
		"Icon saved!",
		"图标已保存！"
	],
	[
		"ID copied to clipboard",
		"ID 已复制到剪贴板"
	],
	[
		"Identity provider",
		"身份提供商"
	],
	[
		"Idle",
		"空闲"
	],
	[
		"IdP metadata XML (optional)",
		"IdP 元数据 XML（可选）"
	],
	[
		"IdP signing certificate (X.509)",
		"IdP 签名证书（X.509）"
	],
	[
		"IdP signing certificate is required",
		"IdP 签名证书为必填项"
	],
	[
		"IdP SSO URL (Entry point)",
		"IdP SSO URL（入口点）"
	],
	[
		"IdP SSO URL is required",
		"IdP SSO URL 为必填项"
	],
	[
		"If no server is selected, the application will be deployed on the server where the user is logged in.",
		"如果未选择服务器，应用将部署到用户当前登录的服务器上"
	],
	[
		"If no server is selected, the compose will be deployed on the server where the user is logged in.",
		"如果未选择服务器，Compose 将部署到用户当前登录的服务器上"
	],
	[
		"If you change the Dokploy Server URL make sure to update your Github Apps to keep the auto-deploy working and preview deployments working.",
		"如果更改 Dokploy 服务器 URL，请务必更新 GitHub Apps，以确保自动部署和预览部署正常工作"
	],
	[
		"If you want to decrease or increase the resources to a specific. application or database",
		"调整特定应用或数据库的资源配额"
	],
	[
		"If you want to persist data in this service use the following config to setup the volumes",
		"如需持久化此服务的数据，请使用以下配置设置卷"
	],
	[
		"If you want to re-deploy this application use this URL in the config of your git provider or docker",
		"如需重新部署此应用，请在 Git 提供商或 Docker 的配置中使用此 URL"
	],
	[
		"If you want to redirect requests to this application use the following config to setup the redirects",
		"如需将请求重定向到此应用，请使用以下配置设置重定向"
	],
	[
		"If you're using cluster features, bind mounts may cause deployment failures since the path must exist on all worker/manager nodes. Consider using external tools to distribute the folder across nodes or use named volumes instead.",
		"如果使用集群功能，绑定挂载可能导致部署失败，因为该路径必须存在于所有工作节点和管理节点上。建议使用外部工具在各节点间分发此文件夹，或改用命名卷"
	],
	[
		"Image",
		"镜像"
	],
	[
		"Image Config",
		"镜像配置"
	],
	[
		"Image deleted",
		"镜像已删除"
	],
	[
		"Image ID",
		"镜像 ID"
	],
	[
		"Image is in use",
		"镜像正在使用中"
	],
	[
		"Image Prefix",
		"镜像前缀"
	],
	[
		"Image size must be less than 2MB",
		"图片大小必须小于 2MB"
	],
	[
		"Images",
		"镜像"
	],
	[
		"Images can't be pulled on worker nodes — verify your",
		"工作节点无法拉取镜像 — 请检查"
	],
	[
		"Impersonate",
		"模拟身份"
	],
	[
		"Impersonating",
		"正在模拟身份"
	],
	[
		"Impersonation Controls",
		"身份模拟控制"
	],
	[
		"Implement continuous integration and deployment workflows to streamline development.",
		"实施持续集成和部署工作流，简化开发流程"
	],
	[
		"Import",
		"导入"
	],
	[
		"Import Compose",
		"导入 Compose"
	],
	[
		"Import networks that exist in Docker but not in Dokploy, and clean up records whose network no longer exists.",
		"导入 Docker 中存在但 Dokploy 中没有的网络，并清理对应网络已不存在的记录"
	],
	[
		"Import selected (",
		"导入所选项 ("
	],
	[
		"Import your Template configuration",
		"导入模板配置"
	],
	[
		"Important:",
		"重要："
	],
	[
		"In",
		"流入"
	],
	[
		"In (MB)",
		"流入（MB）"
	],
	[
		"In order to make the database reachable through the internet, you must set a port and ensure that the port is not being used by another application or database",
		"要使数据库可通过互联网访问，必须设置端口，并确保该端口未被其他应用或数据库占用"
	],
	[
		"In sync",
		"已同步"
	],
	[
		"in the box below:",
		"到下方输入框中："
	],
	[
		"in the swarm, but none have running containers.",
		"位于 Swarm 中，但均无正在运行的容器"
	],
	[
		"In this section you can add domains",
		"在此部分可添加域名"
	],
	[
		"In this section you can add one of your keys or generate a new one.",
		"你可以在此添加已有密钥或生成新密钥"
	],
	[
		"In this section you can edit a domain",
		"在此部分可编辑域名"
	],
	[
		"In this section, you can configure and add new destinations for your backups. Please ensure that you provide the correct information to guarantee secure and efficient storage.",
		"你可以在此配置并添加新的备份存储目标。请确保提供的信息正确，以保障存储安全高效"
	],
	[
		"In use",
		"使用中"
	],
	[
		"Inactive",
		"未启用"
	],
	[
		"Include encryption key",
		"包含加密密钥"
	],
	[
		"Include Services",
		"包含服务"
	],
	[
		"included)",
		"台）"
	],
	[
		"Incoming Webhook URL from a Teams channel. Add an Incoming Webhook in your channel settings to get the URL.",
		"Teams 频道的传入 Webhook URL。请在频道设置中添加传入 Webhook 以获取该 URL"
	],
	[
		"Incomplete OAuth configuration",
		"OAuth 配置不完整"
	],
	[
		"Incorrect password",
		"密码错误"
	],
	[
		"Info",
		"信息"
	],
	[
		"Initial Credentials",
		"初始凭据"
	],
	[
		"Initial grace period before health checks begin",
		"开始健康检查前的初始宽限期"
	],
	[
		"Initialize Swarm on your server:",
		"在服务器上初始化 Swarm："
	],
	[
		"Initialized",
		"已初始化"
	],
	[
		"Inject custom CSS styles globally. Click \"Load Default Styles\" to get the base theme CSS variables as a starting point.",
		"在全局注入自定义 CSS 样式。点击“加载默认样式”获取基础主题 CSS 变量作为起点"
	],
	[
		"Input",
		"流入"
	],
	[
		"Input:",
		"流入："
	],
	[
		"Inspect each container in this compose and run basic lifecycle actions.",
		"查看此 Compose 中的各个容器并执行基本生命周期操作"
	],
	[
		"Installed",
		"已安装"
	],
	[
		"Installed (Recommended)",
		"已安装（推荐）"
	],
	[
		"instead and Traefik will match it by SNI.",
		"，Traefik 将通过 SNI 自动匹配"
	],
	[
		"Integrate and manage your applications via robust and well-documented APIs.",
		"通过功能强大且文档完善的 API 集成和管理应用"
	],
	[
		"Internal",
		"内部网络"
	],
	[
		"Internal Admin Port (Container)",
		"内部管理端口（容器）"
	],
	[
		"Internal Connection URL",
		"内部连接 URL"
	],
	[
		"Internal Credentials",
		"内部连接凭据"
	],
	[
		"Internal GRPC Port (Container)",
		"内部 GRPC 端口（容器）"
	],
	[
		"Internal Host",
		"内部主机"
	],
	[
		"Internal Path",
		"内部路径"
	],
	[
		"Internal path must start with '/'",
		"内部路径必须以“/”开头"
	],
	[
		"Internal Port (Container)",
		"内部端口（容器）"
	],
	[
		"Internal Replication Connection URL",
		"内部复制连接 URL"
	],
	[
		"Internal server error",
		"服务器内部错误"
	],
	[
		"Internal URL (Optional)",
		"内部 URL（可选）"
	],
	[
		"Interval (nanoseconds)",
		"间隔（纳秒）"
	],
	[
		"Invalid",
		"无效"
	],
	[
		"Invalid ASN.1 time format",
		"ASN.1 时间格式无效"
	],
	[
		"Invalid authorization code or state parameter",
		"授权代码或 state 参数无效"
	],
	[
		"Invalid email",
		"邮箱地址无效"
	],
	[
		"Invalid file provided",
		"提供的文件无效"
	],
	[
		"Invalid Gitea provider ID",
		"Gitea 提供商 ID 无效"
	],
	[
		"Invalid Gitlab URL",
		"GitLab URL 无效"
	],
	[
		"Invalid registry URL. Please enter only the hostname (e.g., example.com or registry.example.com). Do not include protocol (https://) or paths.",
		"镜像仓库 URL 无效。请仅输入主机名（例如 example.com 或 registry.example.com），不要包含协议（https://）或路径"
	],
	[
		"Invalid state format",
		"state 格式无效"
	],
	[
		"Invalid SVG file",
		"无效的 SVG 文件"
	],
	[
		"Invalid template format. Must contain compose and config fields",
		"模板格式无效。必须包含 compose 和 config 字段"
	],
	[
		"Invalid verification code",
		"验证码无效"
	],
	[
		"Invalid YAML",
		"YAML 无效"
	],
	[
		"Invitation",
		"邀请"
	],
	[
		"Invitation accepted successfully",
		"邀请已接受"
	],
	[
		"Invitation Copied to clipboard",
		"邀请链接已复制到剪贴板"
	],
	[
		"Invitation created",
		"邀请已创建"
	],
	[
		"Invitation created and email sent",
		"邀请已创建，邮件已发送"
	],
	[
		"Invitation deleted",
		"邀请已删除"
	],
	[
		"Invitation Link",
		"邀请链接"
	],
	[
		"Invitation not found",
		"未找到邀请"
	],
	[
		"Invitation removed",
		"邀请已移除"
	],
	[
		"Invitations",
		"邀请"
	],
	[
		"Invite a new user",
		"邀请新用户"
	],
	[
		"Invite Method",
		"邀请方式"
	],
	[
		"Invite new members to the organization",
		"邀请新成员加入组织"
	],
	[
		"Invite users to your Dokploy account",
		"邀请用户加入你的 Dokploy 账户"
	],
	[
		"Invite users to your organization",
		"邀请用户加入你的组织"
	],
	[
		"Invoice",
		"账单"
	],
	[
		"Invoice Notifications",
		"账单通知"
	],
	[
		"Invoice notifications disabled",
		"已禁用账单通知"
	],
	[
		"Invoice notifications enabled",
		"已启用账单通知"
	],
	[
		"Invoices",
		"发票"
	],
	[
		"IP Address",
		"IP 地址"
	],
	[
		"IP Address Copied!",
		"IP 地址已复制！"
	],
	[
		"IP Address is required",
		"IP 地址为必填项"
	],
	[
		"IP address management settings for this network.",
		"此网络的 IP 地址管理设置"
	],
	[
		"IP range",
		"IP 范围"
	],
	[
		"IP:",
		"IP："
	],
	[
		"IPs assigned to containers vs. the subnet's usable capacity, per network — including reserved networks like",
		"各网络中已分配给容器的 IP 数量与子网可用容量的对比——包括类似以下名称的保留网络："
	],
	[
		"IPs in use",
		"使用中的 IP"
	],
	[
		"IPv4 Address",
		"IPv4 地址"
	],
	[
		"IPv4 or IPv6 must be enabled",
		"必须启用 IPv4 或 IPv6"
	],
	[
		"is configured in",
		"已配置于"
	],
	[
		"Isolated deployment is deprecated. Use the Networks section above to attach networks per service and detach them from dokploy-network — it is declarative and does not break on restarts.",
		"隔离部署已弃用。请使用上方的网络部分为各服务连接网络，并将其与 dokploy-network 断开——这种方式是声明式的，重启后也不会失效"
	],
	[
		"Isolated Deployment Preview",
		"隔离部署预览"
	],
	[
		"Issue and configure new certificates",
		"签发并配置新证书"
	],
	[
		"Issuer",
		"颁发者"
	],
	[
		"Issuer URL",
		"颁发者 URL"
	],
	[
		"Issuer URL is required",
		"颁发者 URL 为必填项"
	],
	[
		"Job ID",
		"任务 ID"
	],
	[
		"Join Discord",
		"加入 Discord"
	],
	[
		"Join to our Discord server and we will help you.",
		"加入我们的 Discord 服务器，我们会为你提供帮助"
	],
	[
		"Keep Latest",
		"保留最新备份"
	],
	[
		"Keep Latest Backups",
		"保留最新备份"
	],
	[
		"Keep the latest",
		"保留最新备份数"
	],
	[
		"keeps all the backups if left empty",
		"留空则保留所有备份"
	],
	[
		"Kernel:",
		"内核："
	],
	[
		"Key",
		"键"
	],
	[
		"Key Auth",
		"密钥验证"
	],
	[
		"Keys (",
		"密钥 ("
	],
	[
		"Kill",
		"强制终止"
	],
	[
		"Kill Build",
		"终止构建"
	],
	[
		"Kill Process",
		"终止进程"
	],
	[
		"Kind",
		"类型"
	],
	[
		"KV Mount",
		"KV 挂载"
	],
	[
		"Label",
		"标签"
	],
	[
		"Labels",
		"标签"
	],
	[
		"Labels updated successfully",
		"标签已成功更新"
	],
	[
		"Last 15 minutes",
		"最近 15 分钟"
	],
	[
		"Last 24 hours",
		"最近 24 小时"
	],
	[
		"Last 30 days",
		"最近 30 天"
	],
	[
		"Last 5 minutes",
		"最近 5 分钟"
	],
	[
		"Last 6 hours",
		"最近 6 小时"
	],
	[
		"Last 7 days",
		"最近 7 天"
	],
	[
		"Last Deploy",
		"上次部署"
	],
	[
		"Last hour",
		"最近 1 小时"
	],
	[
		"Last Name",
		"姓氏"
	],
	[
		"Last name is required",
		"姓氏为必填项"
	],
	[
		"Last Used",
		"最后使用时间"
	],
	[
		"Latest",
		"最新"
	],
	[
		"Layers cached by \"docker build\" on this server will appear here.",
		"此服务器上由“docker build”缓存的层将显示在此处"
	],
	[
		"Least services",
		"服务最少"
	],
	[
		"Leave as is for github.com. For GitHub Enterprise, use your instance URL (e.g. https://acme.ghe.com or https://github.acme.com).",
		"使用 github.com 时保持不变。对于 GitHub Enterprise，请使用您的实例 URL（例如 https://acme.ghe.com 或 https://github.acme.com）"
	],
	[
		"Leave blank to keep existing",
		"留空以保留现有密码"
	],
	[
		"Leave blank to keep existing password. Enter new password to test or update it.",
		"留空可保留现有密码。输入新密码可测试或更新密码"
	],
	[
		"Leave empty for unlimited",
		"留空表示无限制"
	],
	[
		"Leave empty to keep all",
		"留空则全部保留"
	],
	[
		"Let's Encrypt Email",
		"Let's Encrypt 邮箱"
	],
	[
		"LetsEncrypt email is required when certificate type is letsencrypt",
		"证书类型为 letsencrypt 时，必须填写 Let's Encrypt 邮箱"
	],
	[
		"Level",
		"级别"
	],
	[
		"Libsql reloaded successfully",
		"Libsql 重新加载成功"
	],
	[
		"Libsql started successfully",
		"Libsql 启动成功"
	],
	[
		"Libsql stopped successfully",
		"Libsql 已停止"
	],
	[
		"Libsql updated successfully",
		"Libsql 更新成功"
	],
	[
		"License",
		"许可证"
	],
	[
		"License Key",
		"许可证密钥"
	],
	[
		"License key activated",
		"许可证密钥已激活"
	],
	[
		"License key deactivated",
		"许可证密钥已停用"
	],
	[
		"License key is invalid",
		"许可证密钥无效"
	],
	[
		"License key is valid",
		"许可证密钥有效"
	],
	[
		"Limit the number of requests within a time window",
		"限制一个时间窗口内的请求数量"
	],
	[
		"Limit to",
		"限制为"
	],
	[
		"Limited permissions, can be customized.",
		"权限有限，可自定义"
	],
	[
		"Link with GitHub",
		"关联 GitHub 账户"
	],
	[
		"Link with Google",
		"关联 Google 账户"
	],
	[
		"Link your Google or GitHub account to sign in with them.",
		"关联您的 Google 或 GitHub 账户，以便使用这些账户登录"
	],
	[
		"Link your own domains to your applications for a professional presence.",
		"将你自己的域名关联到应用，打造专业形象"
	],
	[
		"Linked accounts",
		"已关联的账户"
	],
	[
		"Linking account",
		"关联账户"
	],
	[
		"Live monitoring",
		"实时监控"
	],
	[
		"Live Preview",
		"实时预览"
	],
	[
		"Load",
		"加载"
	],
	[
		"Load Default Styles",
		"加载默认样式"
	],
	[
		"Load More (",
		"加载更多（还剩"
	],
	[
		"Loading backup files...",
		"正在加载备份文件..."
	],
	[
		"Loading backups...",
		"正在加载备份..."
	],
	[
		"Loading Branches....",
		"正在加载分支……"
	],
	[
		"Loading containers...",
		"正在加载容器..."
	],
	[
		"Loading deployments...",
		"正在加载部署..."
	],
	[
		"Loading Destinations....",
		"正在加载存储目标...."
	],
	[
		"Loading domains...",
		"正在加载域名..."
	],
	[
		"Loading events...",
		"正在加载事件..."
	],
	[
		"Loading invoices...",
		"正在加载账单..."
	],
	[
		"Loading models...",
		"正在加载模型..."
	],
	[
		"Loading patch...",
		"正在加载补丁..."
	],
	[
		"Loading preview deployments...",
		"正在加载预览部署..."
	],
	[
		"Loading providers...",
		"正在加载提供商..."
	],
	[
		"Loading queue...",
		"正在加载队列..."
	],
	[
		"Loading records...",
		"正在加载记录..."
	],
	[
		"Loading Repositories....",
		"正在加载仓库……"
	],
	[
		"Loading scheduled tasks...",
		"正在加载定时任务..."
	],
	[
		"Loading services...",
		"正在加载服务..."
	],
	[
		"Loading Tags....",
		"正在加载标签..."
	],
	[
		"Loading templates...",
		"正在加载模板..."
	],
	[
		"Loading users...",
		"正在加载用户..."
	],
	[
		"Loading volume backups...",
		"正在加载卷备份..."
	],
	[
		"Loading whitelabeling settings...",
		"正在加载白标设置..."
	],
	[
		"Loading...",
		"加载中..."
	],
	[
		"Loading....",
		"正在加载……"
	],
	[
		"Local",
		"本地"
	],
	[
		"local host",
		"本地主机"
	],
	[
		"Local Volumes",
		"本地卷"
	],
	[
		"Lock",
		"锁定"
	],
	[
		"locks (File Locks)",
		"locks（文件锁）"
	],
	[
		"Log Analysis",
		"日志分析"
	],
	[
		"Log Cleanup Schedule",
		"日志清理定时任务"
	],
	[
		"Log cleanup schedule updated",
		"日志清理定时任务已更新"
	],
	[
		"Log out",
		"退出登录"
	],
	[
		"Log type",
		"日志类型"
	],
	[
		"Logged in successfully",
		"登录成功"
	],
	[
		"Login",
		"登录"
	],
	[
		"Login Page Logo URL",
		"登录页徽标 URL"
	],
	[
		"Logo displayed on the login page. If empty, the main logo is used.",
		"显示在登录页上的徽标。留空时使用主徽标"
	],
	[
		"Logo URL",
		"徽标 URL"
	],
	[
		"Logout",
		"退出登录"
	],
	[
		"Logs",
		"日志"
	],
	[
		"logs →",
		"日志 →"
	],
	[
		"Logs for",
		"日志："
	],
	[
		"Logs paused",
		"日志已暂停"
	],
	[
		"Looks like you didn't have the SSH Key yet, you can create one",
		"看起来你还没有 SSH 密钥，可以在这里创建一个"
	],
	[
		"Lost access to your authenticator app?",
		"无法使用身份验证器应用？"
	],
	[
		"Lost your password?",
		"忘记密码？"
	],
	[
		"MAC Address",
		"MAC 地址"
	],
	[
		"Main Directory Created",
		"主目录已创建"
	],
	[
		"Main logo shown in the sidebar and header. Recommended size: 128x128px.",
		"显示在侧边栏和页眉中的主徽标。建议尺寸：128x128px"
	],
	[
		"Maintain",
		"维护"
	],
	[
		"Make a personal blog",
		"创建个人博客"
	],
	[
		"Make sure the compose is running before creating a backup.",
		"创建备份前，请确保 Compose 正在运行"
	],
	[
		"Make sure the host path is a valid path and exists in the host machine.",
		"请确保主机路径有效且已存在于主机上"
	],
	[
		"Make sure the volume name is not being used by another container.",
		"请确保该卷名称未被其他容器使用"
	],
	[
		"Make Sure to select an application to monitor.",
		"请务必选择要监控的应用"
	],
	[
		"Make sure you use the same architecture as the node you are adding.",
		"请确保所选架构与要添加的节点相同"
	],
	[
		"Manage",
		"管理"
	],
	[
		"Manage 2FA",
		"管理 2FA"
	],
	[
		"Manage active sessions across your organization. Revoke sessions to force logout.",
		"管理整个组织中的活跃会话。撤销会话可强制用户退出登录"
	],
	[
		"Manage all the files and directories in",
		"管理以下目录中的所有文件和目录："
	],
	[
		"Manage allowed origins for SSO callbacks. Add, edit, or remove origins for your account.",
		"管理允许用于 SSO 回调的可信源。为你的账户添加、编辑或移除可信源"
	],
	[
		"Manage and back up MySQL, PostgreSQL, MongoDB, MariaDB, and Redis directly from Dokploy.",
		"直接在 Dokploy 中管理和备份 MySQL、PostgreSQL、MongoDB、MariaDB 和 Redis"
	],
	[
		"Manage Cluster",
		"管理集群"
	],
	[
		"Manage custom domains assigned to services",
		"管理分配给服务的自定义域名"
	],
	[
		"Manage database backups and restores",
		"管理数据库备份和恢复"
	],
	[
		"Manage DNS providers (Cloudflare, AWS Route53) and create, update, or delete their DNS records",
		"管理 DNS 提供商（Cloudflare、AWS Route53），并创建、更新或删除其 DNS 记录"
	],
	[
		"Manage Docker image registries",
		"管理 Docker 镜像仓库"
	],
	[
		"Manage Docker volume backups and restores",
		"管理 Docker 卷备份和恢复"
	],
	[
		"Manage environment creation, viewing, and deletion",
		"管理环境的创建、查看和删除"
	],
	[
		"Manage external secret managers (HashiCorp Vault, AWS, Azure, Infisical, Doppler, Scaleway) and where their secrets can be referenced",
		"管理外部密钥管理器（HashiCorp Vault、AWS、Azure、Infisical、Doppler、Scaleway）及其密钥的可引用范围"
	],
	[
		"Manage License",
		"管理许可证"
	],
	[
		"Manage nodes in",
		"管理节点："
	],
	[
		"Manage notification providers (Slack, Discord, Telegram, etc.)",
		"管理通知提供商（Slack、Discord、Telegram 等）"
	],
	[
		"Manage organization members, invitations, and roles",
		"管理组织成员、邀请和角色"
	],
	[
		"Manage origins",
		"管理可信源"
	],
	[
		"Manage persistent volumes and mounts attached to services",
		"管理附加到服务的持久卷和挂载"
	],
	[
		"Manage project creation and deletion",
		"管理项目的创建和删除"
	],
	[
		"Manage remote servers and nodes",
		"管理远程服务器和节点"
	],
	[
		"Manage S3-compatible backup destinations (AWS, Cloudflare R2, etc.)",
		"管理兼容 S3 的备份存储目标（AWS、Cloudflare R2 等）"
	],
	[
		"Manage scheduled jobs (commands, deployments, scripts)",
		"管理定时任务（命令、部署、脚本）"
	],
	[
		"Manage SCIM",
		"管理 SCIM"
	],
	[
		"Manage services (applications, databases, compose) within projects",
		"管理项目内的服务（应用、数据库、Compose）"
	],
	[
		"Manage SSH key configurations for servers and repositories",
		"管理服务器和仓库的 SSH 密钥配置"
	],
	[
		"Manage SSL/TLS certificates",
		"管理 SSL/TLS 证书"
	],
	[
		"Manage Subscription",
		"管理订阅"
	],
	[
		"Manage tags to organize and categorize projects",
		"管理用于组织和分类项目的标签"
	],
	[
		"Manage the Docker images of the selected server.",
		"管理所选服务器上的 Docker 镜像"
	],
	[
		"Manage the Docker networks of the selected server.",
		"管理所选服务器的 Docker 网络"
	],
	[
		"Manage the Docker volumes of the selected server.",
		"管理所选服务器的 Docker 卷"
	],
	[
		"Manage tokens in",
		"在以下位置管理令牌："
	],
	[
		"Manage your active sessions. Revoke sessions to force logout.",
		"管理你的活跃会话。撤销会话可强制退出登录"
	],
	[
		"Manage your AI configurations",
		"管理 AI 配置"
	],
	[
		"Manage your Docker Registry configurations",
		"管理 Docker 镜像仓库配置"
	],
	[
		"Manage your subscription and invoices",
		"管理订阅和账单"
	],
	[
		"Managed databases",
		"托管数据库"
	],
	[
		"Manager",
		"管理节点"
	],
	[
		"Manager Nodes",
		"管理节点"
	],
	[
		"Manual",
		"手动"
	],
	[
		"Manual Backup Successful",
		"手动备份成功"
	],
	[
		"Manual process",
		"手动流程"
	],
	[
		"Manual Setup Instructions",
		"手动设置说明"
	],
	[
		"Mariadb reloaded successfully",
		"MariaDB 重新加载成功"
	],
	[
		"Mariadb started successfully",
		"MariaDB 启动成功"
	],
	[
		"Mariadb stopped successfully",
		"MariaDB 已停止"
	],
	[
		"MariaDB updated successfully",
		"MariaDB 更新成功"
	],
	[
		"Mark for deletion",
		"标记为待删除"
	],
	[
		"Max Attempts",
		"最大尝试次数"
	],
	[
		"Max Failure Ratio",
		"最大失败率"
	],
	[
		"Max Replicas",
		"最大副本数"
	],
	[
		"Maximum",
		"最多"
	],
	[
		"Maximum failure ratio tolerated (0-1)",
		"可容忍的最大失败率（0-1）"
	],
	[
		"Maximum number of replicas per node",
		"每个节点的最大副本数"
	],
	[
		"Maximum number of requests allowed within the time window",
		"时间窗口内允许的最大请求数"
	],
	[
		"Maximum number of restart attempts",
		"最大重启尝试次数"
	],
	[
		"Maximum of 10 custom roles per organization reached",
		"每个组织最多只能创建 10 个自定义角色"
	],
	[
		"Maximum Requests",
		"最大请求数"
	],
	[
		"Maximum time to wait for health check response",
		"等待健康检查响应的最长时间"
	],
	[
		"Maximum transmission unit. Leave empty to use Docker's default.",
		"最大传输单元。留空则使用 Docker 默认值"
	],
	[
		"MD5:",
		"MD5："
	],
	[
		"Member",
		"成员"
	],
	[
		"Member not found",
		"未找到成员"
	],
	[
		"Member:",
		"成员："
	],
	[
		"memlock (Locked Memory)",
		"memlock（锁定内存）"
	],
	[
		"Memory",
		"内存"
	],
	[
		"Memory (GB)",
		"内存（GB）"
	],
	[
		"Memory hard limit in bytes. Example: 1GB = 1073741824 bytes. Use +/- buttons to adjust by 256 MB.",
		"内存硬上限，以字节为单位。例如：1GB = 1073741824 字节。使用 +/- 按钮可按 256 MB 调整"
	],
	[
		"Memory Limit",
		"内存上限"
	],
	[
		"Memory Reservation",
		"内存预留"
	],
	[
		"Memory soft limit in bytes. Example: 256MB = 268435456 bytes. Use +/- buttons to adjust by 256 MB.",
		"内存软上限，以字节为单位。例如：256MB = 268435456 字节。使用 +/- 按钮可按 256 MB 调整"
	],
	[
		"Memory Threshold (%)",
		"内存阈值（%）"
	],
	[
		"Memory Usage",
		"内存使用情况"
	],
	[
		"Memory Usage:",
		"内存使用量："
	],
	[
		"Memory:",
		"内存："
	],
	[
		"Memory/CPU reservation",
		"内存/CPU 预留"
	],
	[
		"Message",
		"消息"
	],
	[
		"Message priority (-2 to 2, default: 0, emergency: 2)",
		"消息优先级（-2 到 2，默认：0，紧急：2）"
	],
	[
		"Message priority (1-10, default: 5)",
		"消息优先级（1-10，默认：5）"
	],
	[
		"Message priority (1-5, default: 3)",
		"消息优先级（1-5，默认：3）"
	],
	[
		"Message Thread ID",
		"消息话题 ID"
	],
	[
		"messages buffered)",
		"条消息已缓冲)"
	],
	[
		"Metadata",
		"元数据"
	],
	[
		"Metadata & Links",
		"元数据与链接"
	],
	[
		"Method not allowed",
		"不允许使用此方法"
	],
	[
		"Metrics Callback URL",
		"指标回调 URL"
	],
	[
		"Metrics Token",
		"指标令牌"
	],
	[
		"Middleware:",
		"中间件："
	],
	[
		"Middlewares",
		"中间件"
	],
	[
		"Missing code parameter",
		"缺少 code 参数"
	],
	[
		"Missing github provider id",
		"缺少 GitHub 提供商 ID"
	],
	[
		"Missing in Docker",
		"Docker 中不存在"
	],
	[
		"Missing in Docker (",
		"Docker 中不存在 ("
	],
	[
		"Missing or invalid code",
		"缺少 code 或 code 无效"
	],
	[
		"Missing signature header",
		"缺少签名请求头"
	],
	[
		"Mode",
		"模式"
	],
	[
		"Mode Type",
		"模式类型"
	],
	[
		"Mode updated successfully",
		"模式已成功更新"
	],
	[
		"Model",
		"模型"
	],
	[
		"Model is required",
		"模型为必填项"
	],
	[
		"Modify",
		"修改"
	],
	[
		"Modify Application",
		"修改应用"
	],
	[
		"Modify Compose",
		"修改 Compose"
	],
	[
		"Modify Environment",
		"修改环境"
	],
	[
		"Modify Libsql",
		"修改 Libsql"
	],
	[
		"Modify MariaDB",
		"修改 MariaDB"
	],
	[
		"Modify MongoDB",
		"修改 MongoDB"
	],
	[
		"Modify MySQL",
		"修改 MySQL"
	],
	[
		"Modify Postgres",
		"修改 Postgres"
	],
	[
		"Modify Redis",
		"修改 Redis"
	],
	[
		"Modify Script",
		"修改脚本"
	],
	[
		"Modify swarm settings for the service.",
		"修改服务的 Swarm 设置"
	],
	[
		"Modify the certificate details",
		"修改证书详细信息"
	],
	[
		"Modify the script which install everything necessary to deploy applications on your server,",
		"修改用于安装在服务器上部署应用所需全部组件的脚本，"
	],
	[
		"Modify the traefik config, in rare cases you may need to add specific config, be careful because modifying incorrectly can break traefik and your application",
		"修改 Traefik 配置。极少数情况下，你可能需要添加特定配置。请谨慎操作，错误修改可能导致 Traefik 和应用无法正常运行"
	],
	[
		"Modify, scale, and customize Dokploy however your project needs.",
		"可根据项目需求修改、扩展和自定义 Dokploy"
	],
	[
		"Modifying the default command may affect deployment stability, impacting logs and monitoring. Proceed carefully and test thoroughly. By default, the command starts with",
		"修改默认命令可能会影响部署稳定性，并影响日志和监控。请谨慎操作并充分测试。默认情况下，该命令以"
	],
	[
		"Mongo reloaded successfully",
		"MongoDB 重新加载成功"
	],
	[
		"Mongo started successfully",
		"MongoDB 启动成功"
	],
	[
		"Mongo stopped successfully",
		"MongoDB 已停止"
	],
	[
		"Mongo updated successfully",
		"MongoDB 更新成功"
	],
	[
		"Monitor (nanoseconds)",
		"监控时长（纳秒）"
	],
	[
		"Monitor and manage your Docker Swarm cluster",
		"监控和管理 Docker Swarm 集群"
	],
	[
		"Monitor CPU, memory, and network usage in real time across every deployment.",
		"实时监控每个部署的 CPU、内存和网络使用情况"
	],
	[
		"Monitor your servers and containers in realtime with notifications when they reach their thresholds.",
		"实时监控服务器和容器，并在达到阈值时发送通知"
	],
	[
		"Monitoring",
		"监控"
	],
	[
		"Monthly",
		"按月"
	],
	[
		"More",
		"更多"
	],
	[
		"Most services",
		"服务最多"
	],
	[
		"Mount Created",
		"挂载已创建"
	],
	[
		"Mount File Content",
		"挂载文件内容"
	],
	[
		"Mount host paths or named volumes",
		"挂载主机路径或命名卷"
	],
	[
		"Mount is required",
		"挂载为必填项"
	],
	[
		"Mount Path",
		"挂载路径"
	],
	[
		"Mount Path (In the container)",
		"挂载路径（容器内）"
	],
	[
		"Mount path required",
		"必须填写挂载路径"
	],
	[
		"Mount Type",
		"挂载类型"
	],
	[
		"Mount Update",
		"挂载已更新"
	],
	[
		"Mountpoint",
		"挂载点"
	],
	[
		"Mounts",
		"挂载"
	],
	[
		"Move",
		"移动"
	],
	[
		"Move Services",
		"移动服务"
	],
	[
		"msgqueue (Message Queues)",
		"msgqueue（消息队列）"
	],
	[
		"MTU (optional)",
		"MTU（可选）"
	],
	[
		"MTU must be a number between 68 and 65535",
		"MTU 必须是 68 到 65535 之间的数字"
	],
	[
		"Multi-language Support",
		"多语言支持"
	],
	[
		"Multi-Node Metrics Note",
		"多节点指标说明"
	],
	[
		"Multi-server",
		"多服务器"
	],
	[
		"Must be >= -1",
		"必须大于或等于 -1"
	],
	[
		"My Account",
		"我的账户"
	],
	[
		"My API Key",
		"我的 API 密钥"
	],
	[
		"MySQL reloaded successfully",
		"MySQL 已成功重新加载"
	],
	[
		"MySQL started successfully",
		"MySQL 已成功启动"
	],
	[
		"MySQL stopped successfully",
		"MySQL 已成功停止"
	],
	[
		"MySQL updated successfully",
		"MySQL 已成功更新"
	],
	[
		"N/A",
		"不适用"
	],
	[
		"Name",
		"名称"
	],
	[
		"Name (A-Z)",
		"名称（A-Z）"
	],
	[
		"Name (Z-A)",
		"名称（Z-A）"
	],
	[
		"Name is required",
		"名称为必填项"
	],
	[
		"Name of the file",
		"文件名"
	],
	[
		"Name required",
		"名称为必填项"
	],
	[
		"Name: @ or",
		"名称：@ 或"
	],
	[
		"Name: Dokploy",
		"名称：Dokploy"
	],
	[
		"Namespace (optional)",
		"命名空间（可选）"
	],
	[
		"Native",
		"原生"
	],
	[
		"Navigate to Applications",
		"前往“应用”"
	],
	[
		"Need help?",
		"需要帮助？"
	],
	[
		"Need Help? We are here to help you.",
		"需要帮助？我们随时为你提供支持"
	],
	[
		"Network",
		"网络"
	],
	[
		"Network Config",
		"网络配置"
	],
	[
		"Network configuration updated successfully",
		"网络配置已成功更新"
	],
	[
		"Network connectivity issues to a remote server — check",
		"连接远程服务器时出现网络问题，请检查"
	],
	[
		"Network created",
		"网络已创建"
	],
	[
		"Network deleted",
		"网络已删除"
	],
	[
		"Network I/O",
		"网络 I/O"
	],
	[
		"Network In",
		"网络流入"
	],
	[
		"Network IP usage",
		"网络 IP 使用情况"
	],
	[
		"Network Name",
		"网络名称"
	],
	[
		"Network not found",
		"未找到网络"
	],
	[
		"Network Out",
		"网络流出"
	],
	[
		"Network Traffic: ↑",
		"网络流量：↑"
	],
	[
		"Networks",
		"网络"
	],
	[
		"Networks attached to this container",
		"此容器连接的网络"
	],
	[
		"Networks to join",
		"要加入的网络"
	],
	[
		"Networks updated. Redeploy the compose to apply them.",
		"网络已更新。请重新部署 Compose 以应用更改"
	],
	[
		"Networks updated. Redeploy the service to apply them.",
		"网络已更新。请重新部署服务以应用更改"
	],
	[
		"Never",
		"永不过期"
	],
	[
		"New",
		"新增"
	],
	[
		"New Backup Codes",
		"新的备份代码"
	],
	[
		"New file in root",
		"在根目录中新建文件"
	],
	[
		"New password is required",
		"必须提供新密码"
	],
	[
		"New plan",
		"新套餐"
	],
	[
		"New plan:",
		"新套餐："
	],
	[
		"New project",
		"新项目"
	],
	[
		"New project name",
		"新项目名称"
	],
	[
		"New version available:",
		"可用的新版本："
	],
	[
		"New version available!",
		"有新版本可用！"
	],
	[
		"Newest first",
		"最新优先"
	],
	[
		"Next",
		"下一页"
	],
	[
		"Next showcase slide",
		"下一张展示幻灯片"
	],
	[
		"nice (Nice Priority)",
		"nice（Nice 优先级）"
	],
	[
		"Nixpacks Installed",
		"Nixpacks 已安装"
	],
	[
		"No",
		"否"
	],
	[
		"No access token received",
		"未收到访问令牌"
	],
	[
		"No actions available",
		"没有可用操作"
	],
	[
		"No Actions matched",
		"没有匹配的操作"
	],
	[
		"No active subscription found",
		"未找到有效订阅"
	],
	[
		"No AI providers configured. Set up a provider to start analyzing logs.",
		"尚未配置 AI 提供商。请先设置提供商以开始分析日志"
	],
	[
		"No API keys found",
		"未找到 API 密钥"
	],
	[
		"No Application Selected:",
		"未选择应用："
	],
	[
		"No apps configured to deploy on tag",
		"没有配置按标签部署的应用"
	],
	[
		"No apps to deploy",
		"没有可部署的应用"
	],
	[
		"No arguments added yet. Click \"Add Argument\" to add one.",
		"尚未添加参数。点击“添加参数”进行添加"
	],
	[
		"No audit logs found.",
		"未找到审计日志"
	],
	[
		"No backup codes to download.",
		"没有可下载的备份代码"
	],
	[
		"No backup files available",
		"没有可用的备份文件"
	],
	[
		"No backup files found for \"",
		"未找到与“"
	],
	[
		"No backups configured",
		"未配置备份"
	],
	[
		"No backups match the current filters.",
		"没有符合当前筛选条件的备份"
	],
	[
		"No bookmarked templates found",
		"未找到已加入书签的模板"
	],
	[
		"No branch found.",
		"未找到分支"
	],
	[
		"No branches found.",
		"未找到分支"
	],
	[
		"No build cache entries match your filters.",
		"没有符合筛选条件的构建缓存条目"
	],
	[
		"No build cache found",
		"未找到构建缓存"
	],
	[
		"No configuration files found",
		"未找到配置文件"
	],
	[
		"No containers found. Deploy the compose to see containers here.",
		"未找到容器。部署 Compose 后即可在此查看容器"
	],
	[
		"No converted compose data available.",
		"暂无可用的 Compose 转换数据"
	],
	[
		"No custom providers defined. The built-in provider list will be used.",
		"尚未定义自定义提供商，将使用内置提供商列表"
	],
	[
		"No custom roles yet",
		"暂无自定义角色"
	],
	[
		"No data found",
		"未找到数据"
	],
	[
		"No deployments found",
		"未找到部署"
	],
	[
		"No deployments yet.",
		"暂无部署"
	],
	[
		"No description provided",
		"未提供描述"
	],
	[
		"No destinations found.",
		"未找到存储目标"
	],
	[
		"No Docker disk usage data available.",
		"暂无 Docker 磁盘使用数据"
	],
	[
		"No domains match the current filters.",
		"没有符合当前筛选条件的域名"
	],
	[
		"No environments found",
		"未找到环境"
	],
	[
		"No environments found.",
		"未找到环境"
	],
	[
		"No events found in the selected time range.",
		"所选时间范围内未找到事件"
	],
	[
		"No files found",
		"未找到文件"
	],
	[
		"No Git Providers configured",
		"尚未配置 Git 提供商"
	],
	[
		"No git providers found",
		"未找到 Git 提供商"
	],
	[
		"No icons found",
		"未找到图标"
	],
	[
		"No images found",
		"未找到镜像"
	],
	[
		"No images match your filters.",
		"没有符合筛选条件的镜像"
	],
	[
		"No invoices found",
		"未找到账单"
	],
	[
		"No items",
		"暂无内容"
	],
	[
		"No license key found",
		"未找到许可证密钥"
	],
	[
		"No lock-in",
		"无厂商锁定"
	],
	[
		"No logs found",
		"未找到日志"
	],
	[
		"No members found.",
		"未找到成员"
	],
	[
		"No models found.",
		"未找到模型"
	],
	[
		"No monitoring data available. This could be because:",
		"暂无监控数据。可能的原因如下："
	],
	[
		"No mounts found for this container.",
		"未找到此容器的挂载"
	],
	[
		"No networks available on this server.",
		"此服务器上没有可用网络"
	],
	[
		"No networks found for this container.",
		"未找到此容器的网络"
	],
	[
		"No networks found.",
		"未找到网络"
	],
	[
		"No networks match your filters.",
		"没有符合当前筛选条件的网络"
	],
	[
		"No networks yet",
		"暂无网络"
	],
	[
		"No organizations found.",
		"未找到组织"
	],
	[
		"No other projects available. Create a new project first to move services.",
		"没有其他可用项目。请先创建新项目，再移动服务"
	],
	[
		"No other projects available. Create a new project first.",
		"没有其他可用项目。请先创建新项目"
	],
	[
		"No overlay networks on this server.",
		"此服务器上没有 overlay 网络"
	],
	[
		"No passkeys registered yet",
		"尚未注册通行密钥"
	],
	[
		"No patches yet",
		"暂无补丁"
	],
	[
		"No pending invitations",
		"暂无待处理的邀请"
	],
	[
		"No port mappings configured",
		"尚未配置端口映射"
	],
	[
		"No ports configured",
		"未配置端口"
	],
	[
		"No preset selected",
		"未选择预设"
	],
	[
		"No preview deployments found",
		"未找到预览部署"
	],
	[
		"No projects found",
		"未找到项目"
	],
	[
		"No projects found.",
		"未找到项目"
	],
	[
		"No records found in this zone.",
		"此区域中未找到记录"
	],
	[
		"No redirects configured",
		"未配置重定向"
	],
	[
		"No registries available. Please",
		"没有可用的镜像仓库。请先"
	],
	[
		"No remote servers added yet.",
		"尚未添加远程服务器"
	],
	[
		"No repositories found.",
		"未找到仓库"
	],
	[
		"No response received from server",
		"未收到服务器响应"
	],
	[
		"No response received from the model",
		"未收到模型响应"
	],
	[
		"No results found.",
		"未找到结果"
	],
	[
		"No results.",
		"无结果"
	],
	[
		"No Running Containers",
		"没有正在运行的容器"
	],
	[
		"No scheduled tasks",
		"暂无定时任务"
	],
	[
		"No SCIM providers configured yet.",
		"尚未配置 SCIM 提供商"
	],
	[
		"No security configured",
		"未配置安全设置"
	],
	[
		"No server selected",
		"未选择服务器"
	],
	[
		"No servers available, Please subscribe to a plan",
		"没有可用的服务器，请订阅套餐"
	],
	[
		"No servers found",
		"未找到服务器"
	],
	[
		"No servers yet",
		"暂无服务器"
	],
	[
		"No service found.",
		"未找到服务"
	],
	[
		"No services added yet. Click on Create Service.",
		"尚未添加服务。请点击“创建服务”"
	],
	[
		"No services available.",
		"没有可用的服务"
	],
	[
		"No services found",
		"未找到服务"
	],
	[
		"No services found in this compose.",
		"此 Compose 中未找到服务"
	],
	[
		"No services found with the current filters",
		"当前筛选条件下未找到服务"
	],
	[
		"No services found.",
		"未找到服务"
	],
	[
		"No services match the current filters.",
		"没有符合当前筛选条件的服务"
	],
	[
		"No sessions found",
		"未找到会话"
	],
	[
		"No sessions match your filters.",
		"没有符合筛选条件的会话"
	],
	[
		"No social accounts linked yet.",
		"尚未关联社交账户"
	],
	[
		"No SSH Keys found. Add a SSH Key to start adding servers.",
		"未找到 SSH 密钥。请添加 SSH 密钥后再添加服务器"
	],
	[
		"No SSO providers",
		"没有 SSO 提供商"
	],
	[
		"No SSO providers configured. Add an OIDC provider above first.",
		"尚未配置 SSO 提供商。请先在上方添加 OIDC 提供商"
	],
	[
		"No sudo access (required for non-root)",
		"无 sudo 权限（非 root 用户必须具备）"
	],
	[
		"No Swarm Services Found",
		"未找到 Swarm 服务"
	],
	[
		"No tags created yet.",
		"尚未创建标签"
	],
	[
		"No tags found.",
		"未找到标签"
	],
	[
		"No tags yet. Create your first tag to start organizing projects.",
		"暂无标签。创建第一个标签，开始整理项目"
	],
	[
		"No templates found",
		"未找到模板"
	],
	[
		"No timezone found.",
		"未找到时区"
	],
	[
		"No TOTP URI received from server",
		"未从服务器收到 TOTP URI"
	],
	[
		"No traefik config detected",
		"未检测到 Traefik 配置"
	],
	[
		"No trusted origins yet. Add one below.",
		"尚无可信源。请在下方添加一个"
	],
	[
		"No type found.",
		"未找到类型"
	],
	[
		"No ulimits configured. Click \"Add Ulimit\" to set resource limits.",
		"未配置 ulimit。点击“添加 Ulimit”设置资源限制"
	],
	[
		"No updates available",
		"暂无可用更新"
	],
	[
		"No users found.",
		"未找到用户"
	],
	[
		"No volume backups",
		"暂无卷备份"
	],
	[
		"No volumes found",
		"未找到卷"
	],
	[
		"No volumes match your filters.",
		"没有与筛选条件匹配的卷"
	],
	[
		"No volumes/mounts configured",
		"未配置卷或挂载"
	],
	[
		"No zones found for this token. Make sure it has access to at least one zone.",
		"此令牌未找到任何区域，请确保它至少有权访问一个区域"
	],
	[
		"Node",
		"节点"
	],
	[
		"Node Applications",
		"节点应用"
	],
	[
		"Node Config",
		"节点配置"
	],
	[
		"Node constraints prevent scheduling — check placement rules in your app's Cluster settings",
		"节点约束导致无法调度 — 请检查应用集群设置中的放置规则"
	],
	[
		"Node deleted successfully",
		"节点删除成功"
	],
	[
		"Node Status",
		"节点状态"
	],
	[
		"node(s)",
		"个节点"
	],
	[
		"node(s) down or drained",
		"个节点已宕机或排空"
	],
	[
		"Node(s) Unavailable",
		"个节点不可用"
	],
	[
		"Nodes",
		"节点"
	],
	[
		"Nodes need a registry to pull images from.",
		"节点需要通过镜像仓库拉取镜像"
	],
	[
		"nofile (Open Files)",
		"nofile（打开的文件数）"
	],
	[
		"None",
		"无"
	],
	[
		"None (HTTP)",
		"无（HTTP）"
	],
	[
		"NOT",
		"不会"
	],
	[
		"Not Active (Fail2Ban service should be running)",
		"未运行（Fail2Ban 服务应处于运行状态）"
	],
	[
		"Not Active (UFW should be enabled for security)",
		"未启用（为确保安全，应启用 UFW）"
	],
	[
		"Not assigned",
		"未分配"
	],
	[
		"Not authorized to delete this network",
		"无权删除此网络"
	],
	[
		"Not Available",
		"不可用"
	],
	[
		"Not Created",
		"未创建"
	],
	[
		"Not Default Runtime",
		"未设为默认运行时"
	],
	[
		"Not deployed",
		"未部署"
	],
	[
		"Not Detected",
		"未检测到"
	],
	[
		"Not Enabled",
		"未启用"
	],
	[
		"Not Enabled (Fail2Ban service should be enabled)",
		"未启用（应启用 Fail2Ban 服务）"
	],
	[
		"Not Enabled (Key Authentication should be enabled)",
		"未启用（应启用密钥验证）"
	],
	[
		"Not Enabled (SSH protection should be enabled to prevent brute force attacks)",
		"未启用（应启用 SSH 防护以防止暴力破解攻击）"
	],
	[
		"Not Enabled (SSH should be enabled)",
		"未启用（应启用 SSH）"
	],
	[
		"Not Initialized",
		"未初始化"
	],
	[
		"Not Installed",
		"未安装"
	],
	[
		"Not Installed (Fail2Ban should be installed for protection against brute force attacks)",
		"未安装（应安装 Fail2Ban 以防范暴力破解攻击）"
	],
	[
		"Not Installed (UFW should be installed for security)",
		"未安装（为确保安全，应安装 UFW）"
	],
	[
		"Not Set",
		"未设置"
	],
	[
		"Note:",
		"注意："
	],
	[
		"Note: Owner role is nontransferable.",
		"注意：所有者角色不可转让"
	],
	[
		"Nothing to import — everything is in sync.",
		"无需导入——所有内容均已同步"
	],
	[
		"Notification",
		"通知"
	],
	[
		"Notification Created",
		"通知已创建"
	],
	[
		"Notification deleted successfully",
		"通知已成功删除"
	],
	[
		"Notification Settings",
		"通知设置"
	],
	[
		"Notification Updated",
		"通知已更新"
	],
	[
		"Notifications",
		"通知"
	],
	[
		"nproc (Processes)",
		"nproc（进程数）"
	],
	[
		"Number of consecutive failures needed to consider container unhealthy",
		"将容器判定为不健康所需的连续失败次数"
	],
	[
		"Number of days to retain server metrics data",
		"服务器指标数据的保留天数"
	],
	[
		"Number of lines",
		"行数"
	],
	[
		"Number of replicas to run",
		"要运行的副本数量"
	],
	[
		"Number of requests to add on each refill",
		"每次补充时增加的请求数"
	],
	[
		"Number of tasks to rollback simultaneously",
		"同时回滚的任务数量"
	],
	[
		"Number of tasks to update simultaneously",
		"同时更新的任务数量"
	],
	[
		"NVIDIA Container Runtime must be installed (nvidia-container-runtime)",
		"必须已安装 NVIDIA Container Runtime（nvidia-container-runtime）"
	],
	[
		"NVIDIA Driver",
		"NVIDIA 驱动程序"
	],
	[
		"NVIDIA drivers must be installed and running (check with nvidia-smi)",
		"必须已安装并运行 NVIDIA 驱动程序（可使用 nvidia-smi 检查）"
	],
	[
		"NVIDIA GPU hardware must be physically installed",
		"必须已实际安装 NVIDIA GPU 硬件"
	],
	[
		"Of",
		"总容量"
	],
	[
		"of a Traefik cert resolver defined in your static configuration (e.g.",
		"（例如"
	],
	[
		"of the selected services are currently running. Please stop these services first before deleting:",
		"个当前正在运行。请先停止以下服务，再将其删除："
	],
	[
		"OIDC provider registered successfully",
		"OIDC 提供商注册成功"
	],
	[
		"OIDC provider updated successfully",
		"OIDC 提供商更新成功"
	],
	[
		"OIDC scopes to request (e.g. openid, email, profile). If empty, openid, email and profile are used.",
		"要请求的 OIDC 作用域（例如 openid、email、profile）。留空时将使用 openid、email 和 profile"
	],
	[
		"Old deployments cleared successfully",
		"旧部署已成功清理"
	],
	[
		"Oldest deployed",
		"最早部署优先"
	],
	[
		"Oldest first",
		"最早优先"
	],
	[
		"On Failure",
		"失败时"
	],
	[
		"On Push",
		"推送时"
	],
	[
		"On Tag",
		"创建标签时"
	],
	[
		"on this server yet.",
		"。"
	],
	[
		"on your web server or remote servers.",
		"。"
	],
	[
		"Once the build finishes, you'll need to wait a few seconds for the deployment server to download the image. These download logs will",
		"构建完成后，你需要等待几秒，让部署服务器下载镜像。这些下载日志"
	],
	[
		"One or more tags not found in your organization",
		"您的组织中未找到一个或多个标签"
	],
	[
		"Online",
		"在线"
	],
	[
		"Only admins and owners can check other users' organizations",
		"只有管理员和所有者可以查看其他用户所属的组织"
	],
	[
		"Only http:// and https:// URLs are allowed",
		"仅允许使用以 http:// 或 https:// 开头的 URL"
	],
	[
		"Only JPG, JPEG, PNG, and SVG files are allowed",
		"仅允许使用 JPG、JPEG、PNG 和 SVG 文件"
	],
	[
		"Only letters, numbers, dashes and underscores",
		"只能包含字母、数字、连字符和下划线"
	],
	[
		"Only letters, numbers, dashes and underscores (used in ${{vault.<name>.<secret>}})",
		"只能使用字母、数字、连字符和下划线（用于 ${{vault.<name>.<secret>}}）"
	],
	[
		"Only needed for personal (dp.pt.) or CLI (dp.ct.) tokens — service tokens already carry them",
		"仅个人令牌（dp.pt.）或 CLI 令牌（dp.ct.）需要填写，服务令牌已包含这些信息"
	],
	[
		"Only OIDC providers are supported — SAML is not compatible with the forward-auth proxy.",
		"仅支持 OIDC 提供商——SAML 与前向认证代理不兼容"
	],
	[
		"Only owners and admins can list host-level schedules.",
		"只有所有者和管理员可以列出主机级定时任务"
	],
	[
		"Only owners or admins can delete users",
		"只有所有者或管理员可以删除用户"
	],
	[
		"Only rebuilds the application without downloading new code",
		"仅重新构建应用，不下载新代码"
	],
	[
		"Only the organization owner can change admin roles. Admins can only modify member roles.",
		"只有组织所有者可以更改管理员角色。管理员只能修改成员角色"
	],
	[
		"Only the organization owner can create an organization",
		"只有组织所有者可以创建组织"
	],
	[
		"Only the organization owner can delete admins. Admins can only delete members.",
		"只有组织所有者可以删除管理员。管理员只能删除普通成员"
	],
	[
		"Only the organization owner can delete it",
		"只有组织所有者可以删除它"
	],
	[
		"Only the organization owner can update it",
		"只有组织所有者可以更新此组织"
	],
	[
		"Only the owner can reset whitelabeling settings",
		"只有所有者可以重置白标设置"
	],
	[
		"Only the owner can share this provider",
		"只有所有者可以共享此提供商"
	],
	[
		"Only the owner can update whitelabeling settings",
		"只有所有者可以更新白标设置"
	],
	[
		"Oops, something went wrong.",
		"糟糕，出现了错误"
	],
	[
		"Open",
		"打开"
	],
	[
		"Open a terminal to the Libsql container",
		"打开 Libsql 容器的终端"
	],
	[
		"Open a terminal to the MariaDB container",
		"打开 MariaDB 容器的终端"
	],
	[
		"Open a terminal to the MongoDB container",
		"打开 MongoDB 容器的终端"
	],
	[
		"Open a terminal to the MySQL container",
		"打开 MySQL 容器的终端"
	],
	[
		"Open a terminal to the PostgreSQL container",
		"打开 PostgreSQL 容器的终端"
	],
	[
		"Open a terminal to the Redis container",
		"打开 Redis 容器的终端"
	],
	[
		"Open menu",
		"打开菜单"
	],
	[
		"Open source",
		"开源"
	],
	[
		"Open Source Templates",
		"开源模板"
	],
	[
		"Open Terminal",
		"打开终端"
	],
	[
		"Operating System",
		"操作系统"
	],
	[
		"Optional description of what this schedule does",
		"可选：描述此定时任务的用途"
	],
	[
		"Optional: Choose a timezone for the schedule execution time",
		"可选：选择定时任务执行时间所使用的时区"
	],
	[
		"Optional. Channel to post to (without #).",
		"可选。要发布到的频道（不含 #）"
	],
	[
		"Optional. Custom headers for your POST request (e.g., Authorization, Content-Type).",
		"可选。POST 请求的自定义请求头（例如 Authorization、Content-Type）"
	],
	[
		"Optional. Display name for the webhook.",
		"可选。Webhook 的显示名称"
	],
	[
		"Optional. If provided, only keeps the latest N backups in the cloud.",
		"可选。设置后，云端仅保留最新的 N 个备份"
	],
	[
		"Optional. Leave blank for public topics.",
		"可选。公开主题请留空"
	],
	[
		"Optional. Use it when you want to send notifications to a specific topic in a group.",
		"可选。当您希望将通知发送到群组中的特定话题时使用"
	],
	[
		"Or register with email",
		"或使用邮箱注册"
	],
	[
		"or upload a custom icon",
		"或上传自定义图标"
	],
	[
		"Order",
		"顺序"
	],
	[
		"Org:",
		"组织："
	],
	[
		"Organization",
		"组织"
	],
	[
		"Organization deleted successfully",
		"组织删除成功"
	],
	[
		"Organization ID copied to clipboard",
		"组织 ID 已复制到剪贴板"
	],
	[
		"Organization is required",
		"组织为必填项"
	],
	[
		"Organization Logo",
		"组织徽标"
	],
	[
		"Organization name",
		"组织名称"
	],
	[
		"Organization name is required",
		"组织名称为必填项"
	],
	[
		"Organization not found",
		"未找到组织"
	],
	[
		"Organization owner not found",
		"未找到组织所有者"
	],
	[
		"Organization?",
		"是否为组织？"
	],
	[
		"Out",
		"流出"
	],
	[
		"Out (MB)",
		"流出（MB）"
	],
	[
		"Output",
		"流出"
	],
	[
		"Override a custom command to the compose file",
		"使用自定义命令覆盖 Compose 文件中的默认命令"
	],
	[
		"Override the default command",
		"覆盖默认命令"
	],
	[
		"Overview",
		"概览"
	],
	[
		"Owner is required",
		"所有者为必填项"
	],
	[
		"Owner:",
		"所有者："
	],
	[
		"Page",
		"第"
	],
	[
		"Page Title",
		"页面标题"
	],
	[
		"page to manage your swarm nodes",
		"页面管理 Swarm 节点"
	],
	[
		"Page Views",
		"页面浏览量"
	],
	[
		"Paid",
		"已支付"
	],
	[
		"Parallelism",
		"并行数"
	],
	[
		"Passkey added successfully",
		"通行密钥添加成功"
	],
	[
		"Passkey Name",
		"通行密钥名称"
	],
	[
		"Passkey removed",
		"通行密钥已移除"
	],
	[
		"Passkeys",
		"通行密钥"
	],
	[
		"Password",
		"密码"
	],
	[
		"Password Auth",
		"密码验证"
	],
	[
		"Password contains invalid characters. Please avoid: $ ! ' \" \\ / and space characters",
		"密码包含无效字符。请勿使用：$ ! ' \" \\ / 和空格"
	],
	[
		"Password contains invalid characters. Please avoid: $ ! ' \" \\ / and space characters for database compatibility",
		"密码包含无效字符。为确保数据库兼容性，请避免使用：$ ! ' \" \\ / 和空格字符"
	],
	[
		"Password is required",
		"密码为必填项"
	],
	[
		"Password must be at least 8 characters",
		"密码至少需要 8 个字符"
	],
	[
		"Password reset successfully",
		"密码重置成功"
	],
	[
		"Password updated successfully",
		"密码更新成功"
	],
	[
		"Passwords do not match",
		"两次输入的密码不一致"
	],
	[
		"Paste a base64-encoded compose export to preview and import it",
		"粘贴 Base64 编码的 Compose 导出内容以预览并导入"
	],
	[
		"Paste full IdP metadata XML if you have it (EntityDescriptor). Otherwise leave empty and use Issuer, IdP SSO URL and certificate above.",
		"如有完整的 IdP 元数据 XML，请粘贴到此处（EntityDescriptor）。否则请留空，并使用上方的颁发者、IdP SSO URL 和证书"
	],
	[
		"Paste IdP signing certificate (PEM, BEGIN CERTIFICATE / END CERTIFICATE)",
		"粘贴 IdP 签名证书（PEM，BEGIN CERTIFICATE / END CERTIFICATE）"
	],
	[
		"Paste your base64-encoded compose export here...",
		"在此粘贴 Base64 编码的 Compose 导出内容..."
	],
	[
		"Paste your Bitbucket API token",
		"粘贴你的 Bitbucket API 令牌"
	],
	[
		"Patch deleted",
		"补丁已删除"
	],
	[
		"Patch has no associated service",
		"补丁没有关联的服务"
	],
	[
		"Patch saved",
		"补丁已保存"
	],
	[
		"Patch updated",
		"补丁已更新"
	],
	[
		"Patches",
		"补丁"
	],
	[
		"Path",
		"路径"
	],
	[
		"Path is required",
		"路径为必填项"
	],
	[
		"Path of your docker context (default: .)",
		"Docker 上下文路径（默认：.）"
	],
	[
		"Path of your docker file (default: Dockerfile)",
		"Dockerfile 路径（默认：Dockerfile）"
	],
	[
		"Path:",
		"路径："
	],
	[
		"Pause",
		"暂停"
	],
	[
		"Pause logs",
		"暂停日志"
	],
	[
		"Pending Invitations",
		"待处理邀请"
	],
	[
		"Perfect for small to mid-size teams",
		"非常适合中小型团队"
	],
	[
		"Permanent",
		"永久重定向"
	],
	[
		"Permission issues running Docker commands on the server",
		"在服务器上运行 Docker 命令时存在权限问题"
	],
	[
		"permission set",
		"权限集的 API 密钥所对应的密钥"
	],
	[
		"Permissions",
		"权限"
	],
	[
		"Permissions updated",
		"权限已更新"
	],
	[
		"Physical Cores (",
		"个物理核心（"
	],
	[
		"Pick a date range",
		"选择日期范围"
	],
	[
		"Pin is required",
		"必须输入验证码"
	],
	[
		"Ping received, webhook is active",
		"已收到 Ping，Webhook 处于活动状态"
	],
	[
		"Placement",
		"放置"
	],
	[
		"Placement constraints (e.g., \"node.role==manager\")",
		"放置约束（例如“node.role==manager”）"
	],
	[
		"Placement updated successfully",
		"放置配置已成功更新"
	],
	[
		"Plan",
		"套餐"
	],
	[
		"Plan upgraded successfully",
		"套餐升级成功"
	],
	[
		"Platforms",
		"平台"
	],
	[
		"Please activate enterprise features to activate license key",
		"请先启用企业版功能，再激活许可证密钥"
	],
	[
		"Please activate enterprise features to validate license key",
		"请先启用企业版功能，再验证许可证密钥"
	],
	[
		"Please add a SSH Key to your server before setting up the server. you can assign a SSH Key to your server in Edit Server.",
		"设置服务器前，请先为其添加 SSH 密钥。您可以在“编辑服务器”中为服务器分配 SSH 密钥"
	],
	[
		"Please complete the OAuth authorization process.",
		"请完成 OAuth 授权流程"
	],
	[
		"Please confirm the password",
		"请确认密码"
	],
	[
		"Please copy your API key now. You won't be able to see it again!",
		"请立即复制你的 API 密钥，此后将无法再次查看！"
	],
	[
		"Please enter a base64 template",
		"请输入 Base64 模板"
	],
	[
		"Please enter a valid 6-digit code",
		"请输入有效的 6 位验证码"
	],
	[
		"Please enter a valid backup code",
		"请输入有效的备用码"
	],
	[
		"Please enter a valid cron expression",
		"请输入有效的 cron 表达式"
	],
	[
		"Please enter a valid URL",
		"请输入有效的 URL"
	],
	[
		"Please enter your 2FA code",
		"请输入 2FA 验证码"
	],
	[
		"Please fill all required fields",
		"请填写所有必填字段"
	],
	[
		"Please fill in Client ID and Gitea URL first.",
		"请先填写客户端 ID 和 Gitea URL"
	],
	[
		"Please remember to click Redeploy after adding, editing, or deleting a mount to apply the changes.",
		"添加、编辑或删除挂载后，请记得点击“重新部署”以应用更改"
	],
	[
		"Please remember to click Redeploy after adding, editing, or deleting the ports to apply the changes.",
		"添加、编辑或删除端口后，请记得点击“重新部署”以应用更改"
	],
	[
		"Please remember to click Redeploy after modify the cluster settings to apply the changes.",
		"修改集群设置后，请记得点击“重新部署”以应用更改"
	],
	[
		"Please remember to click Redeploy after modify the resources to apply the changes.",
		"修改资源设置后，请记得点击“重新部署”以应用更改"
	],
	[
		"Please select a database type",
		"请选择数据库类型"
	],
	[
		"Please select a file to upload",
		"请选择要上传的文件"
	],
	[
		"Please select a server",
		"请选择服务器"
	],
	[
		"Please select a target environment",
		"请选择目标环境"
	],
	[
		"Please select a target project",
		"请选择目标项目"
	],
	[
		"Please set a server to create a certificate",
		"请先设置服务器以创建证书"
	],
	[
		"Please set a serverId to update Traefik ports",
		"请设置 serverId 以更新 Traefik 端口"
	],
	[
		"Please set the port for the metrics server",
		"请设置指标服务器的端口"
	],
	[
		"Please set the refresh rate for the containers in seconds",
		"请设置容器的刷新间隔（秒）"
	],
	[
		"Please set the refresh rate for the server in seconds",
		"请设置服务器的刷新间隔（秒）"
	],
	[
		"Please upgrade your plan",
		"请升级您的套餐"
	],
	[
		"Please wait a few seconds while the image is pulled from the registry. Your application should be running shortly.",
		"从镜像仓库拉取镜像需要几秒钟，请稍候。您的应用很快就会运行"
	],
	[
		"Please wait while we pull the latest version information from Docker Hub.",
		"正在从 Docker Hub 获取最新版本信息，请稍候"
	],
	[
		"Port",
		"端口"
	],
	[
		"Port (high-low)",
		"端口（从高到低）"
	],
	[
		"Port (low-high)",
		"端口（从低到高）"
	],
	[
		"Port Created",
		"端口已创建"
	],
	[
		"Port deleted successfully",
		"端口删除成功"
	],
	[
		"Port is required",
		"端口为必填项"
	],
	[
		"port mapping",
		"个端口映射"
	],
	[
		"Port must be 65535 or below",
		"端口号不能大于 65535"
	],
	[
		"Port must be at least 1",
		"端口号不能小于 1"
	],
	[
		"Port must be higher than 0",
		"端口必须大于 0"
	],
	[
		"Port not found",
		"未找到端口"
	],
	[
		"Port Updated",
		"端口已更新"
	],
	[
		"Port:",
		"端口："
	],
	[
		"Ports",
		"端口"
	],
	[
		"Ports are used to expose your application to the internet.",
		"端口用于将应用暴露到互联网"
	],
	[
		"Ports updated successfully",
		"端口已成功更新"
	],
	[
		"Postgres updated successfully",
		"Postgres 更新成功"
	],
	[
		"PostgreSQL reloaded successfully",
		"PostgreSQL 重新加载成功"
	],
	[
		"PostgreSQL started successfully",
		"PostgreSQL 启动成功"
	],
	[
		"PostgreSQL stopped successfully",
		"PostgreSQL 已停止"
	],
	[
		"Powered by Your Company",
		"由你的公司提供支持"
	],
	[
		"pp Name eg(my-personal)",
		"应用名称，例如 my-personal"
	],
	[
		"PR author information missing",
		"缺少 PR 作者信息"
	],
	[
		"Preferences",
		"偏好设置"
	],
	[
		"Prefix",
		"前缀"
	],
	[
		"Prefix Destination",
		"存储目标路径前缀"
	],
	[
		"Prefix for backup files (optional)",
		"备份文件的前缀（可选）"
	],
	[
		"Prefix required",
		"必须填写前缀"
	],
	[
		"Prefix Storage",
		"存储前缀"
	],
	[
		"Prerequisites",
		"前置条件"
	],
	[
		"Presets",
		"预设"
	],
	[
		"Preview Compose",
		"预览 Compose"
	],
	[
		"Preview Deployment Closed",
		"预览部署已关闭"
	],
	[
		"Preview deployment deleted",
		"预览部署已删除"
	],
	[
		"Preview deployment rebuild started",
		"已开始重新构建预览部署"
	],
	[
		"Preview Deployment Settings",
		"预览部署设置"
	],
	[
		"Preview Deployments",
		"预览部署"
	],
	[
		"Preview deployments are a way to test your application before it is deployed to production. It will create a new deployment for each pull request you create.",
		"预览部署可用于在应用部署到生产环境前进行测试。每创建一个拉取请求，系统都会创建一个新的部署"
	],
	[
		"Preview deployments are disabled for this application, please enable it",
		"此应用已禁用预览部署，请启用该功能"
	],
	[
		"Preview deployments disabled",
		"预览部署已禁用"
	],
	[
		"Preview deployments enabled",
		"预览部署已启用"
	],
	[
		"Preview Deployments settings updated",
		"预览部署设置已更新"
	],
	[
		"Preview Labels",
		"预览标签"
	],
	[
		"Preview Limit",
		"预览数量上限"
	],
	[
		"Preview Logo",
		"预览徽标"
	],
	[
		"Preview of the compose file with isolated deployment configuration",
		"预览包含隔离部署配置的 Compose 文件"
	],
	[
		"Preview Path",
		"预览路径"
	],
	[
		"Preview your docker-compose file with added domains. Note: At least one domain must be specified for this conversion to take effect.",
		"预览添加了域名的 docker-compose 文件。注意：至少需要指定一个域名，此转换才会生效"
	],
	[
		"Preview:",
		"预览："
	],
	[
		"Previous",
		"上一页"
	],
	[
		"Priority",
		"优先级"
	],
	[
		"Private Key",
		"私钥"
	],
	[
		"Private key is required",
		"私钥为必填项"
	],
	[
		"Privilege Mode",
		"权限模式"
	],
	[
		"Process killed successfully",
		"进程已成功终止"
	],
	[
		"Processed",
		"处理时间"
	],
	[
		"Production Guide",
		"生产环境指南"
	],
	[
		"Profile",
		"个人资料"
	],
	[
		"Profile Updated",
		"个人资料已更新"
	],
	[
		"Project",
		"项目"
	],
	[
		"Project (optional)",
		"项目（可选）"
	],
	[
		"Project Created",
		"项目已创建"
	],
	[
		"Project deleted successfully",
		"项目删除成功"
	],
	[
		"Project description (optional)",
		"项目描述（可选）"
	],
	[
		"Project duplicated successfully",
		"项目复制成功"
	],
	[
		"Project env updated successfully",
		"项目环境变量更新成功"
	],
	[
		"Project Environment",
		"项目环境"
	],
	[
		"Project ID",
		"项目 ID"
	],
	[
		"Project ID is required",
		"项目 ID 为必填项"
	],
	[
		"Project name cannot start with a number",
		"项目名称不能以数字开头"
	],
	[
		"Project name is required",
		"项目名称为必填项"
	],
	[
		"Project name must start and end with a letter, number, hyphen or underscore. Spaces are allowed in between.",
		"项目名称必须以字母、数字、连字符或下划线开头和结尾，中间允许使用空格"
	],
	[
		"Project not found",
		"未找到项目"
	],
	[
		"Project not found or you don't have permission to modify it",
		"未找到项目，或您无权修改该项目"
	],
	[
		"Project Shared Env Vars",
		"项目共享环境变量"
	],
	[
		"Project Updated",
		"项目已更新"
	],
	[
		"Projects",
		"项目"
	],
	[
		"Protect deployed applications behind an OIDC SSO gate (oauth2-proxy). Part of Dokploy Enterprise.",
		"通过 OIDC SSO 网关（oauth2-proxy）保护已部署的应用。此功能属于 Dokploy 企业版"
	],
	[
		"Protect this domain with SSO",
		"使用 SSO 保护此域名"
	],
	[
		"Protect your data with automatic backups",
		"通过自动备份保护你的数据"
	],
	[
		"Protocol",
		"协议"
	],
	[
		"Provide a config or a dnsProviderId to test",
		"请提供 config 或 dnsProviderId 以进行测试"
	],
	[
		"Provide a config or a vaultProviderId to test",
		"请提供配置或 vaultProviderId 以进行测试"
	],
	[
		"Provider",
		"提供商"
	],
	[
		"Provider ID",
		"提供商 ID"
	],
	[
		"Provider ID is required",
		"提供商 ID 为必填项"
	],
	[
		"Provider is required",
		"必须选择提供商"
	],
	[
		"Provider removed",
		"提供商已移除"
	],
	[
		"Provider Setup Instructions",
		"提供商设置说明"
	],
	[
		"Provider shared with organization",
		"提供商已与组织共享"
	],
	[
		"Provider unshared",
		"提供商已取消共享"
	],
	[
		"Prune build cache",
		"清理构建缓存"
	],
	[
		"Public Key",
		"公钥"
	],
	[
		"Publish Directory",
		"发布目录"
	],
	[
		"Published Port",
		"发布端口"
	],
	[
		"Published port is required",
		"发布端口为必填项"
	],
	[
		"Published Port Mode",
		"端口发布模式"
	],
	[
		"Published Port:",
		"发布端口："
	],
	[
		"Pull Request",
		"拉取请求"
	],
	[
		"Queue",
		"队列"
	],
	[
		"Queue is empty",
		"队列为空"
	],
	[
		"Queues are being cleaned",
		"正在清理队列"
	],
	[
		"Queues cleaned successfully",
		"队列已清理"
	],
	[
		"Quick-fill provider name and URL, or configure manually below",
		"快速填充提供商名称和 URL，或在下方手动配置"
	],
	[
		"Railpack Installed",
		"Railpack 已安装"
	],
	[
		"Railpack Version",
		"Railpack 版本"
	],
	[
		"Random",
		"随机生成"
	],
	[
		"Random Name eg(my-personal-account)",
		"任意名称，例如 my-personal-account"
	],
	[
		"Randomize Compose (Experimental)",
		"随机化 Compose（实验性）"
	],
	[
		"Rate Limiting",
		"速率限制"
	],
	[
		"RClone Installed",
		"RClone 已安装"
	],
	[
		"Re-analyze",
		"重新分析"
	],
	[
		"Re-check",
		"重新检查"
	],
	[
		"Read",
		"读取"
	],
	[
		"Read (MB)",
		"读取（MB）"
	],
	[
		"Read-only access across all resources",
		"对所有资源拥有只读访问权限"
	],
	[
		"Read:",
		"读取："
	],
	[
		"Read/Write",
		"读写模式"
	],
	[
		"Ready templates",
		"预置模板"
	],
	[
		"Ready to Update",
		"已准备好更新"
	],
	[
		"Rebuild",
		"重新构建"
	],
	[
		"Rebuild Application",
		"重新构建应用"
	],
	[
		"Rebuild Compose",
		"重新构建 Compose"
	],
	[
		"Rebuild Database",
		"重建数据库"
	],
	[
		"Rebuild Preview Deployment",
		"重新构建预览部署"
	],
	[
		"Rebuild the preview deployment without downloading new code",
		"不下载新代码，直接重新构建预览部署"
	],
	[
		"Rebuilds the compose without downloading the source code",
		"无需下载源代码即可重新构建 Compose"
	],
	[
		"Receive email notifications for payments and failed charges.",
		"接收付款和扣款失败的邮件通知"
	],
	[
		"Recent deployments",
		"最近部署"
	],
	[
		"Recently deployed",
		"最近部署优先"
	],
	[
		"Recommended",
		"推荐"
	],
	[
		"Recommended 🚀",
		"推荐 🚀"
	],
	[
		"Reconfigure GPU",
		"重新配置 GPU"
	],
	[
		"Record created",
		"记录已创建"
	],
	[
		"Record deleted",
		"记录已删除"
	],
	[
		"Record updated",
		"记录已更新"
	],
	[
		"Recreate",
		"重新创建"
	],
	[
		"Redeploy the compose to apply the changes.",
		"重新部署 Compose 以应用更改"
	],
	[
		"Redeployed",
		"已重新部署"
	],
	[
		"Redeployment queued",
		"重新部署已加入队列"
	],
	[
		"Redirect Created",
		"重定向已创建"
	],
	[
		"Redirect deleted successfully",
		"重定向删除成功"
	],
	[
		"Redirect to non-www",
		"重定向到非 www 域名"
	],
	[
		"Redirect to www",
		"重定向到 www"
	],
	[
		"Redirect Updated",
		"重定向已更新"
	],
	[
		"Redirect URI",
		"重定向 URI"
	],
	[
		"Redirect URI is required",
		"必须填写重定向 URI"
	],
	[
		"Redirect URI:",
		"重定向 URI："
	],
	[
		"Redirects",
		"重定向"
	],
	[
		"Redirects are used to redirect requests to another url.",
		"重定向用于将请求重定向到另一个 URL"
	],
	[
		"Redis reloaded successfully",
		"Redis 重新加载成功"
	],
	[
		"Redis started successfully",
		"Redis 启动成功"
	],
	[
		"Redis stopped successfully",
		"Redis 已停止"
	],
	[
		"Redis updated successfully",
		"Redis 更新成功"
	],
	[
		"Reference format:",
		"引用格式："
	],
	[
		"Reference secrets in your environment variables with",
		"在环境变量中使用以下格式引用密钥："
	],
	[
		"Refill Amount",
		"补充数量"
	],
	[
		"Refill Interval",
		"补充间隔"
	],
	[
		"Refresh",
		"刷新"
	],
	[
		"Refresh interval:",
		"刷新间隔："
	],
	[
		"Refresh updated",
		"刷新令牌已更新"
	],
	[
		"Regenerate Backup Codes",
		"重新生成备份代码"
	],
	[
		"Regex",
		"正则表达式"
	],
	[
		"Regex required",
		"正则表达式为必填项"
	],
	[
		"Region",
		"区域"
	],
	[
		"Region is required",
		"区域为必填项"
	],
	[
		"Register",
		"注册"
	],
	[
		"Register OIDC provider",
		"注册 OIDC 提供商"
	],
	[
		"Register provider",
		"注册提供商"
	],
	[
		"Register SAML provider",
		"注册 SAML 提供商"
	],
	[
		"Registered providers",
		"已注册的提供商"
	],
	[
		"Registered successfully, please check your inbox or spam folder to confirm your account.",
		"注册成功，请检查收件箱或垃圾邮件文件夹以确认账户"
	],
	[
		"Registries",
		"镜像仓库"
	],
	[
		"Registries (",
		"镜像仓库 ("
	],
	[
		"Registry",
		"镜像仓库"
	],
	[
		"Registry added",
		"镜像仓库已添加"
	],
	[
		"registry configuration",
		"镜像仓库配置"
	],
	[
		"Registry configuration deleted successfully",
		"镜像仓库配置删除成功"
	],
	[
		"Registry is required when rollbacks are enabled",
		"启用回滚时必须选择镜像仓库"
	],
	[
		"Registry Name",
		"镜像仓库名称"
	],
	[
		"Registry name is required",
		"镜像仓库名称为必填项"
	],
	[
		"Registry not found",
		"未找到镜像仓库"
	],
	[
		"Registry Test Failed",
		"镜像仓库测试失败"
	],
	[
		"Registry Tested Successfully",
		"镜像仓库测试成功"
	],
	[
		"Registry updated",
		"镜像仓库已更新"
	],
	[
		"Registry URL",
		"镜像仓库 URL"
	],
	[
		"release notes",
		"发行说明"
	],
	[
		"Reload",
		"重新加载"
	],
	[
		"Reload Application",
		"重新加载应用"
	],
	[
		"Reload Libsql",
		"重新加载 Libsql"
	],
	[
		"Reload Mariadb",
		"重新加载 MariaDB"
	],
	[
		"Reload Mongo",
		"重新加载 MongoDB"
	],
	[
		"Reload MySQL",
		"重新加载 MySQL"
	],
	[
		"Reload or clean the web server.",
		"重新加载或清理 Web 服务器"
	],
	[
		"Reload PostgreSQL",
		"重新加载 PostgreSQL"
	],
	[
		"Reload Redis",
		"重新加载 Redis"
	],
	[
		"Reload services",
		"重新加载服务"
	],
	[
		"Reload the application without rebuilding it",
		"重新加载应用而不重新构建"
	],
	[
		"remaining)",
		"个）"
	],
	[
		"remote server",
		"远程服务器"
	],
	[
		"Remote Servers",
		"远程服务器"
	],
	[
		"Remote Servers -> Server -> Edit Server -> Update IP Address",
		"远程服务器 → 服务器 → 编辑服务器 → 更新 IP 地址"
	],
	[
		"Remote Servers Only",
		"仅限远程服务器"
	],
	[
		"Remote Servers Only updated",
		"仅远程服务器设置已更新"
	],
	[
		"Remove",
		"移除"
	],
	[
		"Remove authentication proxy",
		"移除认证代理"
	],
	[
		"Remove certificates",
		"移除证书"
	],
	[
		"Remove Container",
		"删除容器"
	],
	[
		"Remove DNS providers and delete their records",
		"移除 DNS 提供商并删除其记录"
	],
	[
		"Remove Docker registries",
		"移除 Docker 镜像仓库"
	],
	[
		"Remove domains from services",
		"从服务中移除域名"
	],
	[
		"Remove Git provider connections",
		"移除 Git 提供商连接"
	],
	[
		"Remove icon",
		"移除图标"
	],
	[
		"Remove Invitation",
		"移除邀请"
	],
	[
		"Remove IPAM config",
		"移除 IPAM 配置"
	],
	[
		"Remove members from the organization",
		"从组织中移除成员"
	],
	[
		"Remove Network",
		"移除网络"
	],
	[
		"Remove notification providers",
		"移除通知提供商"
	],
	[
		"Remove S3 destinations",
		"移除 S3 存储"
	],
	[
		"Remove SCIM provider",
		"移除 SCIM 提供商"
	],
	[
		"Remove secret providers",
		"移除密钥提供商"
	],
	[
		"Remove servers from the organization",
		"从组织中移除服务器"
	],
	[
		"Remove SSH keys",
		"移除 SSH 密钥"
	],
	[
		"Remove SSO provider",
		"移除 SSO 提供商"
	],
	[
		"Remove the external path from the request before forwarding to the application",
		"将请求转发到应用前移除外部路径"
	],
	[
		"Remove this passkey?",
		"移除此通行密钥？"
	],
	[
		"Remove trusted origin",
		"移除可信源"
	],
	[
		"Remove volumes and mounts from services",
		"从服务中移除卷和挂载"
	],
	[
		"Remove watch path",
		"移除监视路径"
	],
	[
		"Removed from bookmarks",
		"已从书签中移除"
	],
	[
		"Replace",
		"将"
	],
	[
		"Replacement",
		"替换内容"
	],
	[
		"Replacement required",
		"替换内容为必填项"
	],
	[
		"Replaces \"Dokploy\" across the entire interface.",
		"替换整个界面中的“Dokploy”"
	],
	[
		"Replicas",
		"副本数"
	],
	[
		"Replicas must be at least 1",
		"副本数必须至少为 1"
	],
	[
		"Replicated",
		"副本模式"
	],
	[
		"Repo is required",
		"仓库为必填项"
	],
	[
		"Repositories:",
		"仓库："
	],
	[
		"Repository",
		"仓库"
	],
	[
		"Repository connection through unauthorized provider",
		"通过您无权访问的提供商连接的仓库"
	],
	[
		"Repository disconnected successfully",
		"仓库已成功断开连接"
	],
	[
		"Repository is required",
		"仓库为必填项"
	],
	[
		"repository through a git provider that you don't have access to. You can see basic repository information below, but cannot modify the configuration.",
		"仓库，该仓库通过您无权访问的 Git 提供商连接。您可以在下方查看仓库的基本信息，但无法修改其配置"
	],
	[
		"Repository URL",
		"仓库 URL"
	],
	[
		"Repository URL is required",
		"仓库 URL 为必填项"
	],
	[
		"Repository:",
		"仓库："
	],
	[
		"Request Limiting",
		"请求总量限制"
	],
	[
		"Request log",
		"请求日志"
	],
	[
		"Requests",
		"请求"
	],
	[
		"Requests are not activated",
		"请求日志未启用"
	],
	[
		"Require Collaborator Permissions",
		"要求协作者权限"
	],
	[
		"Require collaborator permissions to preview deployments, valid roles are:",
		"预览部署要求协作者具备以下有效角色之一："
	],
	[
		"Require visitors to authenticate against your identity provider before reaching this application.",
		"要求访问者先通过您的身份提供商进行身份验证，才能访问此应用"
	],
	[
		"Required",
		"必填"
	],
	[
		"Required for personal/CLI tokens (dp.pt. / dp.ct.)",
		"个人令牌/CLI 令牌（dp.pt. / dp.ct.）需要此项"
	],
	[
		"Requirements",
		"要求"
	],
	[
		"Requisites",
		"前提条件"
	],
	[
		"Reset",
		"重置"
	],
	[
		"Reset Onboarding",
		"重置新手引导"
	],
	[
		"Reset Password",
		"重置密码"
	],
	[
		"Reset to Defaults",
		"重置为默认值"
	],
	[
		"Reset to Last 3 Days",
		"重置为最近 3 天"
	],
	[
		"Reset to the default configuration",
		"重置为默认配置"
	],
	[
		"Reset Whitelabeling",
		"重置白标设置"
	],
	[
		"Resource",
		"资源"
	],
	[
		"Resources",
		"资源"
	],
	[
		"Resources that will be isolated:",
		"将被隔离的资源："
	],
	[
		"Resources Updated",
		"资源设置已更新"
	],
	[
		"Restart",
		"重启"
	],
	[
		"Restart policy",
		"重启策略"
	],
	[
		"Restart Policy",
		"重启策略"
	],
	[
		"Restart policy updated successfully",
		"重启策略已成功更新"
	],
	[
		"Restart the Libsql service without rebuilding",
		"重启 Libsql 服务而不重新构建"
	],
	[
		"Restart the MariaDB service without rebuilding",
		"重启 MariaDB 服务而不重新构建"
	],
	[
		"Restart the MongoDB service without rebuilding",
		"重启 MongoDB 服务而不重新构建"
	],
	[
		"Restart the MySQL service without rebuilding",
		"重启 MySQL 服务而不重新构建"
	],
	[
		"Restart the PostgreSQL service without rebuilding",
		"不重新构建，直接重启 PostgreSQL 服务"
	],
	[
		"Restart the Redis service without rebuilding",
		"重新启动 Redis 服务，无需重新构建"
	],
	[
		"Restart the service with a clean state",
		"以全新状态重启服务"
	],
	[
		"Restore",
		"恢复"
	],
	[
		"Restore a database from a backup",
		"从备份恢复数据库"
	],
	[
		"Restore a Docker volume from a backup",
		"从备份恢复 Docker 卷"
	],
	[
		"Restore Backup",
		"恢复备份"
	],
	[
		"Restore Volume Backup",
		"恢复卷备份"
	],
	[
		"Resume",
		"继续"
	],
	[
		"Resume logs",
		"继续显示日志"
	],
	[
		"Retention days must be at least 1",
		"保留天数必须至少为 1 天"
	],
	[
		"Retries",
		"重试次数"
	],
	[
		"Retry",
		"重试"
	],
	[
		"Retry (seconds)",
		"重试间隔（秒）"
	],
	[
		"Retry and expire are required for emergency priority (2)",
		"紧急优先级（2）必须设置重试间隔和过期时间"
	],
	[
		"Review and Finalize",
		"检查并完成"
	],
	[
		"Review the template information before importing",
		"导入前请检查模板信息"
	],
	[
		"Revoke Session",
		"撤销会话"
	],
	[
		"Role",
		"角色"
	],
	[
		"Role is required",
		"角色为必填项"
	],
	[
		"Role Name",
		"角色名称"
	],
	[
		"Role name is required",
		"角色名称为必填项"
	],
	[
		"Role name must be 50 characters or less",
		"角色名称不能超过 50 个字符"
	],
	[
		"Role updated successfully",
		"角色更新成功"
	],
	[
		"Role:",
		"角色："
	],
	[
		"role? This action cannot be undone.",
		"角色吗？此操作无法撤销"
	],
	[
		"Rollback",
		"回滚"
	],
	[
		"Rollback Config",
		"回滚配置"
	],
	[
		"Rollback config updated successfully",
		"回滚配置已成功更新"
	],
	[
		"Rollback initiated successfully",
		"已成功启动回滚"
	],
	[
		"Rollback order strategy",
		"回滚顺序策略"
	],
	[
		"Rollback Registry",
		"回滚镜像仓库"
	],
	[
		"Rollback Settings",
		"回滚设置"
	],
	[
		"Rollback settings updated",
		"回滚设置已更新"
	],
	[
		"Rollback to this deployment",
		"回滚到此次部署"
	],
	[
		"Root Password",
		"root 密码"
	],
	[
		"Root password is required for MySQL",
		"MySQL 必须填写 root 密码"
	],
	[
		"Root password updated successfully",
		"root 密码更新成功"
	],
	[
		"Rows per page",
		"每页行数"
	],
	[
		"rtprio (Real-time Priority)",
		"rtprio（实时优先级）"
	],
	[
		"Run a custom command in the container after the application initialized",
		"应用初始化后，在容器中运行自定义命令"
	],
	[
		"Run Command",
		"运行命令"
	],
	[
		"Run Manual Backup",
		"运行手动备份"
	],
	[
		"Run Manual Schedule",
		"手动运行定时任务"
	],
	[
		"Run Manual Volume Backup",
		"手动运行卷备份"
	],
	[
		"Running",
		"运行中"
	],
	[
		"Running as root",
		"以 root 用户运行"
	],
	[
		"Running Containers",
		"正在运行的容器"
	],
	[
		"Running multiple builds at once increases CPU, memory and disk usage on each server. Each concurrent build runs its own builder and image build, so set this based on the resources the machine can handle — too high a value can exhaust memory and make deployments fail.",
		"同时运行多个构建会增加每台服务器的 CPU、内存和磁盘占用。每个并发构建都会运行独立的构建器和镜像构建，因此请根据机器可承载的资源设置此值。值过高可能耗尽内存并导致部署失败"
	],
	[
		"Running with sudo",
		"使用 sudo 运行"
	],
	[
		"Runs a full Docker cleanup daily, pruning stopped containers, unused images, build cache, and system resources. This may remove images built for Compose services that run on-demand (backup runners, cron jobs, one-off tasks).",
		"每天执行完整的 Docker 清理，移除已停止的容器、未使用的镜像、构建缓存和系统资源。这可能会删除为按需运行的 Compose 服务（备份运行器、Cron 作业、一次性任务）构建的镜像"
	],
	[
		"Runs a read-only check over SSH (inotify limits, disk, Docker network pool, daemon errors). Runs automatically when you open this tab — click Re-check to refresh.",
		"通过 SSH 执行只读检查（inotify 限制、磁盘、Docker 网络池、守护进程错误）。打开此选项卡时会自动运行，点击“重新检查”可刷新"
	],
	[
		"Runtime Configuration",
		"运行时配置"
	],
	[
		"runtime only",
		"仅运行时生效"
	],
	[
		"s are",
		"名成员"
	],
	[
		"S3 Bucket",
		"S3 存储桶"
	],
	[
		"S3 Destinations",
		"S3 存储"
	],
	[
		"SAML provider registered successfully",
		"SAML 提供商注册成功"
	],
	[
		"SAML provider updated successfully",
		"SAML 提供商更新成功"
	],
	[
		"Save",
		"保存"
	],
	[
		"Save changes",
		"保存更改"
	],
	[
		"Save Changes",
		"保存更改"
	],
	[
		"Save Endpoint Spec",
		"保存端点规范"
	],
	[
		"Save Health Check",
		"保存健康检查"
	],
	[
		"Save Labels",
		"保存标签"
	],
	[
		"Save Mode",
		"保存模式"
	],
	[
		"Save Networks",
		"保存网络"
	],
	[
		"Save Patch",
		"保存补丁"
	],
	[
		"Save Placement",
		"保存放置配置"
	],
	[
		"Save Restart Policy",
		"保存重启策略"
	],
	[
		"Save Rollback Config",
		"保存回滚配置"
	],
	[
		"Save Settings",
		"保存设置"
	],
	[
		"Save Stop Grace Period",
		"保存停止宽限期"
	],
	[
		"Save these backup codes in a secure place",
		"请将这些备份代码保存在安全的位置"
	],
	[
		"Save these backup codes in a secure place. You can use them to access your account if you lose access to your authenticator device.",
		"请将这些备份代码保存在安全的位置。如果您无法使用身份验证器设备，可以用它们访问账户"
	],
	[
		"Save these backup codes in a secure place. You can use them to access your account if you lose access to your authenticator device. Each code can only be used once.",
		"请将这些备份代码保存在安全的位置。如果您无法使用身份验证器设备，可以用它们访问账户。每个代码只能使用一次"
	],
	[
		"Save Update Config",
		"保存更新配置"
	],
	[
		"Scalable Deployments",
		"可扩展部署"
	],
	[
		"Scale when you're ready with granular RBAC, SSO, audit logs, rollback and multi-tenancy.",
		"准备就绪后，可借助细粒度 RBAC、SSO、审计日志、回滚和多租户功能进行扩展"
	],
	[
		"Scan the QR code and verify with your authenticator app",
		"扫描二维码并使用身份验证器应用完成验证"
	],
	[
		"Scan the QR code with your authenticator app",
		"请使用身份验证器应用扫描二维码"
	],
	[
		"Scan this QR code with your authenticator app",
		"使用身份验证器应用扫描此二维码"
	],
	[
		"Scanning Docker networks...",
		"正在扫描 Docker 网络..."
	],
	[
		"Schedule",
		"定时任务"
	],
	[
		"Schedule (Cron) required",
		"必须填写定时任务（Cron）"
	],
	[
		"Schedule deleted successfully",
		"定时任务已删除"
	],
	[
		"Schedule Jobs",
		"定时任务"
	],
	[
		"Schedule run failed, check the deployment logs",
		"定时任务运行失败，请检查部署日志"
	],
	[
		"Schedule run successfully",
		"定时任务运行成功"
	],
	[
		"Schedule tasks to run automatically at specified intervals.",
		"按指定间隔自动运行任务"
	],
	[
		"Schedule volume backups to run automatically at specified intervals",
		"设置卷备份，使其按指定间隔自动运行"
	],
	[
		"Scheduled Tasks",
		"定时任务"
	],
	[
		"Schedules",
		"定时任务"
	],
	[
		"SCIM 2.0 endpoint URL",
		"SCIM 2.0 端点 URL"
	],
	[
		"SCIM provider not found or you do not have permission to delete it",
		"未找到 SCIM 提供商，或您无权删除该提供商"
	],
	[
		"SCIM provider removed",
		"SCIM 提供商已移除"
	],
	[
		"SCIM provisioning",
		"SCIM 用户预配"
	],
	[
		"Scope",
		"作用域"
	],
	[
		"Scopes",
		"作用域"
	],
	[
		"Scopes (optional)",
		"作用域（可选）"
	],
	[
		"Scopes: api, read_user, read_repository",
		"权限范围：api、read_user、read_repository"
	],
	[
		"Script",
		"脚本"
	],
	[
		"Script is required",
		"脚本不能为空"
	],
	[
		"Script modified successfully",
		"脚本修改成功"
	],
	[
		"Search and select a backup file",
		"搜索并选择备份文件"
	],
	[
		"Search Backup Files",
		"搜索备份文件"
	],
	[
		"Search backup files...",
		"搜索备份文件..."
	],
	[
		"Search branch...",
		"搜索分支..."
	],
	[
		"Search branches...",
		"搜索分支..."
	],
	[
		"Search by id, type or description...",
		"按 ID、类型或描述搜索..."
	],
	[
		"Search by IP, device...",
		"按 IP、设备搜索..."
	],
	[
		"Search by name, project, environment, server...",
		"按名称、项目、环境或服务器搜索..."
	],
	[
		"Search by name, subnet, gateway...",
		"按名称、子网、网关搜索..."
	],
	[
		"Search by name...",
		"按名称搜索..."
	],
	[
		"Search by repository, tag or id...",
		"按仓库、标签或 ID 搜索..."
	],
	[
		"Search Destination...",
		"搜索存储目标..."
	],
	[
		"Search destinations...",
		"搜索存储目标..."
	],
	[
		"Search for a command to run...",
		"搜索要运行的命令..."
	],
	[
		"Search icons (e.g. react, vue, docker)...",
		"搜索图标（例如 react、vue、docker）..."
	],
	[
		"Search logs...",
		"搜索日志..."
	],
	[
		"Search networks...",
		"搜索网络..."
	],
	[
		"Search or type a custom model...",
		"搜索或输入自定义模型..."
	],
	[
		"Search organizations...",
		"搜索组织..."
	],
	[
		"Search repository...",
		"搜索仓库..."
	],
	[
		"Search service...",
		"搜索服务..."
	],
	[
		"Search tag...",
		"搜索标签..."
	],
	[
		"Search tags...",
		"搜索标签..."
	],
	[
		"Search Template",
		"搜索模板"
	],
	[
		"Search timezone...",
		"搜索时区..."
	],
	[
		"Search type...",
		"搜索类型..."
	],
	[
		"Search users by email or name...",
		"按邮箱或姓名搜索用户..."
	],
	[
		"Secondary",
		"次要按钮"
	],
	[
		"Secret Access Key",
		"秘密访问密钥"
	],
	[
		"Secret Access Key is required",
		"必须填写秘密访问密钥"
	],
	[
		"Secret Key",
		"密钥"
	],
	[
		"Secret Key is required",
		"密钥为必填项"
	],
	[
		"Secret Path",
		"密钥路径"
	],
	[
		"Secrets",
		"密钥"
	],
	[
		"Secrets are specially designed for sensitive information and are only available at build-time. See documentation",
		"密钥专用于敏感信息，且仅在构建时可用。查看文档"
	],
	[
		"Secrets from an external vault provider",
		"来自外部密钥库提供商的密钥"
	],
	[
		"Secrets provider deleted",
		"密钥提供商已删除"
	],
	[
		"Secrets Providers",
		"密钥提供商"
	],
	[
		"section whose CN/SAN matches this host — Traefik selects it automatically via SNI.",
		"部分创建的、CN/SAN 与此主机匹配的任意证书提供 TLS；Traefik 会通过 SNI 自动选择"
	],
	[
		"Secure HTTPS connection",
		"安全的 HTTPS 连接"
	],
	[
		"Security",
		"安全设置"
	],
	[
		"Security Created",
		"安全设置已创建"
	],
	[
		"Security deleted successfully",
		"安全设置删除成功"
	],
	[
		"security to your application",
		"应用的安全设置"
	],
	[
		"Security Updated",
		"安全设置已更新"
	],
	[
		"See all invitations",
		"查看所有邀请"
	],
	[
		"See all the containers of your dokploy server",
		"查看 Dokploy 服务器上的所有容器"
	],
	[
		"See all the details of this deployment |",
		"查看此部署的所有详细信息 |"
	],
	[
		"See all the incoming requests that pass trough Traefik",
		"查看所有经过 Traefik 的传入请求"
	],
	[
		"See all the preview deployments",
		"查看所有预览部署"
	],
	[
		"See in detail the applications running on this node",
		"详细查看此节点上运行的应用"
	],
	[
		"See in detail the config of this container",
		"查看此容器的详细配置"
	],
	[
		"See in detail the metadata of this node",
		"查看此节点的详细元数据"
	],
	[
		"See the last 10 deployments for this",
		"查看此项最近的 10 次部署"
	],
	[
		"Select a Bitbucket Account",
		"选择 Bitbucket 账户"
	],
	[
		"Select a Bitbucket account first",
		"请先选择 Bitbucket 账户"
	],
	[
		"Select a build server",
		"选择构建服务器"
	],
	[
		"Select a build server to handle the build process for this application.",
		"选择一台构建服务器来处理此应用的构建过程"
	],
	[
		"Select a certificate",
		"选择证书"
	],
	[
		"Select a certificate provider",
		"选择证书提供商"
	],
	[
		"Select a certificate provider to see how TLS will be served for this host.",
		"选择证书提供商以查看将如何为此主机提供 TLS"
	],
	[
		"Select a compose type",
		"选择 Compose 类型"
	],
	[
		"Select a container",
		"选择容器"
	],
	[
		"Select a container above to open a terminal. If none are listed, make sure the service is deployed and running.",
		"请在上方选择容器以打开终端。如果没有列出容器，请确保服务已部署并正在运行"
	],
	[
		"Select a container above to view its logs. If none are listed, make sure the service is deployed and running.",
		"请在上方选择容器以查看其日志。如果没有列出容器，请确保服务已部署且正在运行"
	],
	[
		"Select a container to view logs",
		"选择要查看日志的容器"
	],
	[
		"Select a container to watch the monitoring",
		"选择要监控的容器"
	],
	[
		"Select a database",
		"选择数据库"
	],
	[
		"Select a database type",
		"选择数据库类型"
	],
	[
		"Select a destination",
		"选择存储目标"
	],
	[
		"Select a destination and search for backup files",
		"选择存储目标并搜索备份文件"
	],
	[
		"Select a destination and search for volume backup files",
		"选择存储目标并搜索卷备份文件"
	],
	[
		"Select a file from the tree to edit",
		"从文件树中选择要编辑的文件"
	],
	[
		"Select a file to edit",
		"选择要编辑的文件"
	],
	[
		"Select a file to view or edit it",
		"选择文件以查看或编辑"
	],
	[
		"Select a Gitea Account",
		"选择 Gitea 账户"
	],
	[
		"Select a Gitea account first",
		"请先选择 Gitea 账户"
	],
	[
		"Select a Github Account",
		"选择 GitHub 账户"
	],
	[
		"Select a GitHub account first",
		"请先选择 GitHub 账户"
	],
	[
		"Select a Gitlab Account",
		"选择 GitLab 账户"
	],
	[
		"Select a GitLab account first",
		"请先选择 GitLab 账户"
	],
	[
		"Select a key",
		"选择密钥"
	],
	[
		"Select a model",
		"选择模型"
	],
	[
		"Select a model from the list or type a custom model name",
		"从列表中选择模型或输入自定义模型名称"
	],
	[
		"Select a predefined schedule",
		"选择预设定时任务"
	],
	[
		"Select a protocol",
		"选择协议"
	],
	[
		"Select a provider",
		"选择提供商"
	],
	[
		"Select a provider preset...",
		"选择提供商预设..."
	],
	[
		"Select a publish mode for the port",
		"选择端口发布模式"
	],
	[
		"Select a Railpack version or choose manual to enter a custom version.",
		"选择 Railpack 版本，或选择手动输入自定义版本"
	],
	[
		"Select a registry",
		"选择镜像仓库"
	],
	[
		"Select a registry to store the built images from the build server.",
		"选择用于存储构建服务器所构建镜像的镜像仓库"
	],
	[
		"Select a registry where rollback images will be stored.",
		"选择用于存储回滚镜像的镜像仓库"
	],
	[
		"Select a repository",
		"选择仓库"
	],
	[
		"Select a role",
		"选择角色"
	],
	[
		"Select a S3 Provider",
		"选择 S3 提供商"
	],
	[
		"Select a server",
		"选择服务器"
	],
	[
		"Select a Server",
		"选择服务器"
	],
	[
		"Select a server to authenticate with the registry. The authentication will be performed from the selected server.",
		"选择一台服务器用于镜像仓库身份验证。身份验证将从所选服务器执行"
	],
	[
		"Select a server to enable the GPU Setup",
		"请选择服务器以启用 GPU 设置"
	],
	[
		"Select a server to test the destination. If you don't have a server choose the default one.",
		"选择一台服务器来测试存储目标。如果没有服务器，请选择默认服务器"
	],
	[
		"Select a server to test the registry",
		"选择一台服务器以测试镜像仓库"
	],
	[
		"Select a server type",
		"选择服务器类型"
	],
	[
		"Select a service name",
		"选择服务名称"
	],
	[
		"Select a SSH Key",
		"选择 SSH 密钥"
	],
	[
		"Select a timezone for the schedule. If not specified, UTC will be used.",
		"选择定时任务的时区。如未指定，将使用 UTC"
	],
	[
		"Select a trigger type",
		"选择触发类型"
	],
	[
		"Select a volume name",
		"选择卷名称"
	],
	[
		"Select AI Provider",
		"选择 AI 提供商"
	],
	[
		"Select AI provider...",
		"选择 AI 提供商..."
	],
	[
		"Select All",
		"全选"
	],
	[
		"Select an AI provider",
		"选择 AI 提供商"
	],
	[
		"Select an email provider",
		"选择邮件提供商"
	],
	[
		"Select an SSO provider",
		"选择 SSO 提供商"
	],
	[
		"Select an SSO provider first",
		"请先选择 SSO 提供商"
	],
	[
		"Select Bitbucket product.",
		"选择 Bitbucket 产品"
	],
	[
		"Select branch",
		"选择分支"
	],
	[
		"Select database type",
		"选择数据库类型"
	],
	[
		"Select Destination",
		"选择存储目标"
	],
	[
		"Select driver",
		"选择驱动程序"
	],
	[
		"Select endpoint mode",
		"选择端点模式"
	],
	[
		"Select Environment",
		"选择环境"
	],
	[
		"Select expiration time",
		"选择过期时间"
	],
	[
		"Select failure action",
		"选择失败操作"
	],
	[
		"Select interval",
		"选择间隔"
	],
	[
		"Select invite method",
		"选择邀请方式"
	],
	[
		"Select mode type",
		"选择模式类型"
	],
	[
		"Select networks...",
		"选择网络..."
	],
	[
		"Select Node type",
		"选择节点类型"
	],
	[
		"Select one of the providers defined by your organization",
		"选择由您的组织定义的提供商"
	],
	[
		"Select order",
		"选择顺序"
	],
	[
		"Select organization",
		"选择组织"
	],
	[
		"Select Organization",
		"选择组织"
	],
	[
		"Select points",
		"选择数据点数"
	],
	[
		"Select Project",
		"选择项目"
	],
	[
		"Select Railpack version",
		"选择 Railpack 版本"
	],
	[
		"Select refill interval",
		"选择补充间隔"
	],
	[
		"Select repository",
		"选择仓库"
	],
	[
		"Select restart condition",
		"选择重启条件"
	],
	[
		"Select shell type",
		"选择 Shell 类型"
	],
	[
		"Select tag",
		"选择标签"
	],
	[
		"Select tags...",
		"选择标签..."
	],
	[
		"Select target environment",
		"选择目标环境"
	],
	[
		"Select target project",
		"选择目标项目"
	],
	[
		"Select the actions.",
		"选择操作"
	],
	[
		"Select the email provider to send the invitation",
		"选择用于发送邀请的邮件提供商"
	],
	[
		"Select the expiration date (Max 1 year)",
		"选择到期日期（最长 1 年）"
	],
	[
		"Select the following scopes:",
		"选择以下权限范围："
	],
	[
		"Select the Git Providers that the user can access",
		"选择用户可访问的 Git 提供商"
	],
	[
		"Select the Mount Type",
		"选择挂载类型"
	],
	[
		"Select the Projects that the user can access",
		"选择用户可访问的项目"
	],
	[
		"Select the role for the new user",
		"选择新用户的角色"
	],
	[
		"Select the server and click on setup server",
		"选择服务器，然后点击“设置服务器”"
	],
	[
		"Select the server where you want to deploy (optional)",
		"选择要部署到的服务器（可选）"
	],
	[
		"Select the Servers that the user can access",
		"选择用户可访问的服务器"
	],
	[
		"Select the source of your code",
		"选择代码来源"
	],
	[
		"Select the target project and environment to move",
		"选择目标项目和环境，以移动"
	],
	[
		"Select the way of building your code",
		"选择代码的构建方式"
	],
	[
		"Select time range",
		"选择时间范围"
	],
	[
		"Select time window",
		"选择时间窗口"
	],
	[
		"Select types...",
		"选择类型..."
	],
	[
		"Select ulimit",
		"选择 ulimit"
	],
	[
		"Select user to impersonate",
		"选择要模拟其身份的用户"
	],
	[
		"Select way to connect to",
		"选择连接方式："
	],
	[
		"Selected services to duplicate",
		"已选择要复制的服务"
	],
	[
		"Self-hosted Restrictions",
		"自托管限制"
	],
	[
		"Send Reset Link",
		"发送重置链接"
	],
	[
		"Sendgrid service opensource analogue",
		"构建 SendGrid 服务的开源替代方案"
	],
	[
		"Server",
		"服务器"
	],
	[
		"Server (Optional)",
		"服务器（可选）"
	],
	[
		"Server Assignment",
		"分配服务器"
	],
	[
		"Server Created",
		"服务器已创建"
	],
	[
		"Server diagnostics",
		"服务器诊断"
	],
	[
		"Server Domain",
		"服务器域名"
	],
	[
		"Server has active services",
		"服务器存在活动服务"
	],
	[
		"Server has active services, please delete them first",
		"服务器上有正在运行的服务，请先将其删除"
	],
	[
		"Server IP",
		"服务器 IP"
	],
	[
		"Server IP Updated",
		"服务器 IP 已更新"
	],
	[
		"Server IP:",
		"服务器 IP："
	],
	[
		"Server is inactive",
		"服务器未启用"
	],
	[
		"Server not found",
		"未找到服务器"
	],
	[
		"server on your plan of",
		"台服务器，套餐额度为"
	],
	[
		"Server Refresh Rate",
		"服务器刷新间隔"
	],
	[
		"Server Refresh Rate is required",
		"服务器刷新间隔为必填项"
	],
	[
		"Server Reloaded",
		"服务器已重新加载"
	],
	[
		"Server Retention Days",
		"服务器数据保留天数"
	],
	[
		"Server Threshold",
		"服务器阈值"
	],
	[
		"Server Time:",
		"服务器时间："
	],
	[
		"Server Type",
		"服务器类型"
	],
	[
		"Server update in progress",
		"正在更新服务器"
	],
	[
		"Server Updated",
		"服务器已更新"
	],
	[
		"Server updated successfully",
		"服务器更新成功"
	],
	[
		"Server URL",
		"服务器 URL"
	],
	[
		"Server URL is required",
		"服务器 URL 为必填项"
	],
	[
		"Servers",
		"服务器"
	],
	[
		"Servers (",
		"服务器 ("
	],
	[
		"Servers (min.",
		"服务器（至少包含"
	],
	[
		"Servers Plan",
		"服务器套餐"
	],
	[
		"Servers:",
		"服务器："
	],
	[
		"serves TLS using any certificate you created in the",
		"会使用您在"
	],
	[
		"Service",
		"服务"
	],
	[
		"Service Created",
		"服务创建成功"
	],
	[
		"Service deleted successfully",
		"服务已成功删除"
	],
	[
		"Service Env Vars",
		"服务环境变量"
	],
	[
		"Service icon",
		"服务图标"
	],
	[
		"Service Issues Detected",
		"检测到服务问题"
	],
	[
		"Service Name",
		"服务名称"
	],
	[
		"Service name is required",
		"服务名称不能为空"
	],
	[
		"Service name is required for compose backups",
		"Compose 备份必须填写服务名称"
	],
	[
		"Service Provider Saved",
		"服务提供商已保存"
	],
	[
		"Service Token is required",
		"服务令牌为必填项"
	],
	[
		"Service tokens (dp.st.) are recommended: read-only and scoped to a single project + config",
		"建议使用服务令牌（dp.st.）：只读，且仅限单个项目和配置"
	],
	[
		"service(s)",
		"个服务"
	],
	[
		"Service(s) With No Running Tasks",
		"个服务没有正在运行的任务"
	],
	[
		"Services",
		"服务"
	],
	[
		"Services are scaled to 0 replicas",
		"服务副本数已缩减为 0"
	],
	[
		"Services duplicated successfully",
		"服务复制成功"
	],
	[
		"Services to exclude from monitoring",
		"不纳入监控的服务"
	],
	[
		"Services to monitor.",
		"要监控的服务"
	],
	[
		"services? This action cannot be undone.",
		"个服务吗？此操作无法撤销"
	],
	[
		"services)",
		"个服务)"
	],
	[
		"Session not found",
		"未找到会话"
	],
	[
		"Session revoked successfully",
		"会话已成功撤销"
	],
	[
		"Sessions",
		"会话"
	],
	[
		"Sessions (Login/Logout)",
		"会话（登录/退出登录）"
	],
	[
		"Set as default",
		"设为默认"
	],
	[
		"Set current public IP",
		"设为当前公网 IP"
	],
	[
		"Set resource limits for the container. Each ulimit has a soft limit (warning threshold) and hard limit (maximum allowed). Use -1 for unlimited.",
		"设置容器的资源限制。每项 ulimit 都有软限制（警告阈值）和硬限制（允许的最大值）。使用 -1 表示不限制"
	],
	[
		"Set service mode to either 'Replicated' with a specified number of tasks (Replicas), or 'Global' (one task per node).",
		"将服务模式设置为“副本模式”并指定任务数量（副本数），或设置为“全局模式”（每个节点运行一个任务）"
	],
	[
		"Set the permanent option to true to apply a permanent redirection.",
		"将永久重定向选项设为 true，即可应用永久重定向"
	],
	[
		"Set when the app was created and not editable, the app credentials belong to this instance.",
		"此项在 App 创建时设置且不可编辑，App 凭据属于当前实例"
	],
	[
		"Setting a custom role as default requires a valid enterprise license",
		"将自定义角色设为默认角色需要有效的企业版许可证"
	],
	[
		"Settings",
		"设置"
	],
	[
		"Settings → SSO → Application Authentication",
		"设置 → SSO → 应用身份验证"
	],
	[
		"Setup",
		"设置"
	],
	[
		"Setup Security Suggestions",
		"安全设置建议"
	],
	[
		"Setup Server",
		"设置服务器"
	],
	[
		"Setup Server?",
		"设置服务器？"
	],
	[
		"setup the server",
		"设置服务器"
	],
	[
		"Setup the server",
		"设置服务器"
	],
	[
		"Setup Validation",
		"设置验证"
	],
	[
		"Setup your server",
		"设置服务器"
	],
	[
		"Share with entire organization",
		"与整个组织共享"
	],
	[
		"Shared",
		"共享"
	],
	[
		"Shared environment variables",
		"环境共享变量"
	],
	[
		"Shared project variables",
		"项目共享变量"
	],
	[
		"Shell Type",
		"Shell 类型"
	],
	[
		"Show Extra Logs",
		"显示额外日志"
	],
	[
		"Show less",
		"收起"
	],
	[
		"Show more",
		"展开"
	],
	[
		"Show timestamps",
		"显示时间戳"
	],
	[
		"Show token",
		"显示令牌"
	],
	[
		"Showing",
		"显示"
	],
	[
		"Showing containers across",
		"正在显示"
	],
	[
		"Shows all software checks and available hardware",
		"显示所有软件检查结果和可用硬件"
	],
	[
		"Shows the build server configuration status",
		"显示构建服务器的配置状态"
	],
	[
		"Shows the configuration state that changes with the Enable GPU",
		"显示点击“启用 GPU”后发生变化的配置状态"
	],
	[
		"Shows the server configuration status",
		"显示服务器的配置状态"
	],
	[
		"Sidebar",
		"侧边栏"
	],
	[
		"Sign in",
		"登录"
	],
	[
		"Sign In",
		"登录"
	],
	[
		"Sign in with GitHub",
		"使用 GitHub 登录"
	],
	[
		"Sign in with Google",
		"使用 Google 登录"
	],
	[
		"Sign in with Passkey",
		"使用通行密钥登录"
	],
	[
		"Sign in with SSO",
		"使用 SSO 登录"
	],
	[
		"Sign in without a password using your device's biometrics, security key, or password manager.",
		"使用设备生物识别、安全密钥或密码管理器，无需密码即可登录"
	],
	[
		"Sign Up",
		"注册"
	],
	[
		"sigpending (Pending Signals)",
		"sigpending（待处理信号数）"
	],
	[
		"Single Page Application (SPA)",
		"单页应用（SPA）"
	],
	[
		"Single Sign-On (SSO)",
		"单点登录（SSO）"
	],
	[
		"Single sign-on (SSO) with OIDC and SAML is part of Dokploy Enterprise. Add a valid license to configure it.",
		"使用 OIDC 和 SAML 的单点登录（SSO）是 Dokploy 企业版功能。请添加有效许可证以进行配置"
	],
	[
		"Single Sign-On URL from your IdP's SAML setup.",
		"来自 IdP SAML 设置的单点登录 URL"
	],
	[
		"Site URL",
		"站点 URL"
	],
	[
		"Site URL is required",
		"站点 URL 为必填项"
	],
	[
		"Size",
		"大小"
	],
	[
		"Size:",
		"大小："
	],
	[
		"Skip for now",
		"暂时跳过"
	],
	[
		"Skip YAML validation (for Go templating)",
		"跳过 YAML 验证（用于 Go 模板）"
	],
	[
		"SMTP Port",
		"SMTP 端口"
	],
	[
		"SMTP Port is required",
		"SMTP 端口为必填项"
	],
	[
		"SMTP Server",
		"SMTP 服务器"
	],
	[
		"SMTP Server is required",
		"SMTP 服务器为必填项"
	],
	[
		"Soft Limit",
		"软限制"
	],
	[
		"Some IdPs require full metadata; paste the XML here to override issuer/entry point/cert.",
		"部分 IdP 需要完整元数据；在此粘贴 XML 可覆盖颁发者、入口点和证书"
	],
	[
		"Some services are not healthy. You can still proceed with the update.",
		"部分服务状态异常，但仍可继续更新"
	],
	[
		"Something went wrong",
		"出现错误"
	],
	[
		"Sorry, we couldn't find your page.",
		"抱歉，找不到你访问的页面"
	],
	[
		"Sort by...",
		"排序方式..."
	],
	[
		"Source",
		"源"
	],
	[
		"Space",
		"存储空间"
	],
	[
		"Specify compose file version",
		"指定 Compose 文件版本"
	],
	[
		"Specify the image to start the container from",
		"指定用于启动容器的镜像"
	],
	[
		"Spread preferences for task distribution (e.g., \"node.labels.region\")",
		"用于任务分布的分散偏好设置（例如“node.labels.region”）"
	],
	[
		"Sqld Node",
		"Sqld 节点"
	],
	[
		"Sqld Primary URL",
		"Sqld 主节点 URL"
	],
	[
		"sqldPrimaryUrl is required when sqldNode is 'replica'.",
		"当 sqldNode 为“replica”时，sqldPrimaryUrl 为必填项"
	],
	[
		"sqldPrimaryUrl should not be provided when sqldNode is not 'replica'.",
		"当 sqldNode 不为“replica”时，不应提供 sqldPrimaryUrl"
	],
	[
		"SSH (Secure Shell) is a protocol that allows you to securely connect to a server and execute commands on it.",
		"SSH（安全外壳协议）是一种可用于安全连接服务器并在其上执行命令的协议"
	],
	[
		"SSH Copied to clipboard",
		"SSH 密钥已复制到剪贴板"
	],
	[
		"SSH Key",
		"SSH 密钥"
	],
	[
		"SSH key created successfully",
		"SSH 密钥创建成功"
	],
	[
		"SSH Key deleted successfully",
		"SSH 密钥删除成功"
	],
	[
		"SSH Key Generated",
		"SSH 密钥已生成"
	],
	[
		"SSH Key is required",
		"SSH 密钥为必填项"
	],
	[
		"SSH key updated successfully",
		"SSH 密钥更新成功"
	],
	[
		"SSH Key:",
		"SSH 密钥："
	],
	[
		"SSH Keys",
		"SSH 密钥"
	],
	[
		"SSH Keys (",
		"SSH 密钥 ("
	],
	[
		"SSH Mode",
		"SSH 模式"
	],
	[
		"SSH Protection",
		"SSH 防护"
	],
	[
		"SSL Certificate Provider",
		"SSL 证书提供商"
	],
	[
		"sslip.io is a public HTTP service and does not support SSL/HTTPS. HTTPS and certificate options will not have any effect.",
		"sslip.io 是一项公共 HTTP 服务，不支持 SSL/HTTPS。HTTPS 和证书选项不会生效"
	],
	[
		"SSO authentication",
		"SSO 身份验证"
	],
	[
		"SSO Authentication",
		"SSO 身份验证"
	],
	[
		"SSO authentication disabled for this domain",
		"已为此域名禁用 SSO 身份验证"
	],
	[
		"SSO authentication enabled for this domain",
		"已为此域名启用 SSO 身份验证"
	],
	[
		"SSO provider details",
		"SSO 提供商详情"
	],
	[
		"SSO provider not found or you do not have permission to access it",
		"未找到 SSO 提供商，或您无权访问该提供商"
	],
	[
		"SSO provider not found or you do not have permission to delete it",
		"未找到 SSO 提供商，或您无权删除该提供商"
	],
	[
		"SSO provider not found or you do not have permission to update it",
		"未找到 SSO 提供商，或您无权更新该提供商"
	],
	[
		"Stack",
		"堆栈"
	],
	[
		"stack (Stack Size)",
		"stack（栈大小）"
	],
	[
		"Standard HTTP connection",
		"标准 HTTP 连接"
	],
	[
		"Start",
		"启动"
	],
	[
		"Start adding servers to deploy your applications remotely.",
		"开始添加服务器，以便远程部署应用"
	],
	[
		"Start Application",
		"启动应用"
	],
	[
		"Start Compose",
		"启动 Compose"
	],
	[
		"Start First",
		"先启动"
	],
	[
		"Start from a preset",
		"从预设开始"
	],
	[
		"Start Libsql",
		"启动 Libsql"
	],
	[
		"Start Mariadb",
		"启动 MariaDB"
	],
	[
		"Start Mongo",
		"启动 MongoDB"
	],
	[
		"Start MySQL",
		"启动 MySQL"
	],
	[
		"Start Period (nanoseconds)",
		"启动期（纳秒）"
	],
	[
		"Start PostgreSQL",
		"启动 PostgreSQL"
	],
	[
		"Start Redis",
		"启动 Redis"
	],
	[
		"Start Services",
		"启动服务"
	],
	[
		"Start the application (requires a previous successful build)",
		"启动应用（需要此前已成功构建）"
	],
	[
		"Start the compose (requires a previous successful build)",
		"启动 Compose（需要此前成功完成构建）"
	],
	[
		"Start the Libsql database (requires a previous successful setup)",
		"启动 Libsql 数据库（需要此前已成功完成设置）"
	],
	[
		"Start the MariaDB database (requires a previous successful setup)",
		"启动 MariaDB 数据库（需要此前已成功完成设置）"
	],
	[
		"Start the MongoDB database (requires a previous successful setup)",
		"启动 MongoDB 数据库（需要此前已成功完成设置）"
	],
	[
		"Start the MySQL database (requires a previous successful setup)",
		"启动 MySQL 数据库（需要此前已成功完成初始化）"
	],
	[
		"Start the PostgreSQL database (requires a previous successful setup)",
		"启动 PostgreSQL 数据库（需要此前已成功完成设置）"
	],
	[
		"Start the Redis database (requires a previous successful setup)",
		"启动 Redis 数据库（需要此前已成功完成设置）"
	],
	[
		"Startup plan requires at least 3 servers",
		"Startup 套餐要求至少有 3 台服务器"
	],
	[
		"State",
		"状态"
	],
	[
		"Status",
		"状态"
	],
	[
		"Status:",
		"状态："
	],
	[
		"Step",
		"步骤"
	],
	[
		"Step 1: Describe Your Needs",
		"第 1 步：描述你的需求"
	],
	[
		"Step 2: Choose a Variant",
		"第 2 步：选择方案"
	],
	[
		"Step 3: Review and Finalize",
		"第 3 步：检查并完成"
	],
	[
		"Steps",
		"步骤"
	],
	[
		"Stop",
		"停止"
	],
	[
		"Stop Application",
		"停止应用"
	],
	[
		"Stop Compose",
		"停止 Compose"
	],
	[
		"Stop First",
		"先停止"
	],
	[
		"Stop Grace Period",
		"停止宽限期"
	],
	[
		"Stop Grace Period (nanoseconds)",
		"停止宽限期（纳秒）"
	],
	[
		"Stop grace period updated successfully",
		"停止宽限期已成功更新"
	],
	[
		"Stop Impersonating",
		"停止模拟身份"
	],
	[
		"Stop Libsql",
		"停止 Libsql"
	],
	[
		"Stop Mariadb",
		"停止 MariaDB"
	],
	[
		"Stop Mongo",
		"停止 MongoDB"
	],
	[
		"Stop MySQL",
		"停止 MySQL"
	],
	[
		"Stop PostgreSQL",
		"停止 PostgreSQL"
	],
	[
		"Stop Redis",
		"停止 Redis"
	],
	[
		"Stop Service",
		"停止服务"
	],
	[
		"Stop Services",
		"停止服务"
	],
	[
		"Stop the current database service",
		"停止当前数据库服务"
	],
	[
		"Stop the currently running application",
		"停止当前正在运行的应用"
	],
	[
		"Stop the currently running compose",
		"停止当前正在运行的 Compose"
	],
	[
		"Stop the currently running Libsql database",
		"停止当前正在运行的 Libsql 数据库"
	],
	[
		"Stop the currently running MariaDB database",
		"停止当前正在运行的 MariaDB 数据库"
	],
	[
		"Stop the currently running MongoDB database",
		"停止当前正在运行的 MongoDB 数据库"
	],
	[
		"Stop the currently running MySQL database",
		"停止当前正在运行的 MySQL 数据库"
	],
	[
		"Stop the currently running PostgreSQL database",
		"停止当前正在运行的 PostgreSQL 数据库"
	],
	[
		"Stop the currently running Redis database",
		"停止当前运行的 Redis 数据库"
	],
	[
		"Stopped containers cleaned",
		"已清理停止的容器"
	],
	[
		"Stopped impersonating user",
		"已停止模拟用户身份"
	],
	[
		"Storage Space",
		"存储空间"
	],
	[
		"Stores the encryption key inside the backup so environment variables can be restored on a new server. Anyone with access to the backup file can decrypt them.",
		"将加密密钥存储在备份中，以便在新服务器上恢复环境变量。任何能访问备份文件的人都可以解密这些变量"
	],
	[
		"Strip Path",
		"剥离路径"
	],
	[
		"Strip path can only be enabled when a path other than '/' is specified",
		"仅当指定的路径不是“/”时才能启用路径剥离"
	],
	[
		"Stripe Customer ID copied to clipboard",
		"Stripe 客户 ID 已复制到剪贴板"
	],
	[
		"Stripe Customer ID not found",
		"未找到 Stripe 客户 ID"
	],
	[
		"Stripe Subscription ID copied to clipboard",
		"Stripe 订阅 ID 已复制到剪贴板"
	],
	[
		"Stripe will prorate the change.",
		"Stripe 将按比例计算变更费用"
	],
	[
		"Sub:",
		"订阅："
	],
	[
		"Submit Log in issue on Github",
		"在 GitHub 上提交登录问题"
	],
	[
		"Subnet",
		"子网"
	],
	[
		"Subnet (e.g. 172.20.0.0/16)",
		"子网（例如 172.20.0.0/16）"
	],
	[
		"Subscribe",
		"订阅"
	],
	[
		"Subscription is not active",
		"订阅未生效"
	],
	[
		"Subscription updated successfully",
		"订阅更新成功"
	],
	[
		"Success",
		"成功"
	],
	[
		"Successfully built and deployed",
		"已成功构建并部署"
	],
	[
		"Successfully connected to Gitea",
		"已成功连接到 Gitea"
	],
	[
		"Successfully impersonating user",
		"已成功开始模拟用户身份"
	],
	[
		"Suffix",
		"后缀"
	],
	[
		"Support URL",
		"支持 URL"
	],
	[
		"Supported Distributions:",
		"支持的发行版："
	],
	[
		"Supported Distros:",
		"支持的发行版："
	],
	[
		"Supported formats: JPG, JPEG, PNG, SVG (max 2MB)",
		"支持格式：JPG、JPEG、PNG、SVG（最大 2 MB）"
	],
	[
		"Swagger API:",
		"Swagger API："
	],
	[
		"Swarm GPU Support",
		"Swarm GPU 支持"
	],
	[
		"Swarm is reachable but service listing failed.",
		"可以连接 Swarm，但无法列出服务"
	],
	[
		"swarm node(s)",
		"个 Swarm 节点上的容器"
	],
	[
		"Swarm Nodes",
		"Swarm 节点"
	],
	[
		"Swarm Not Available",
		"Swarm 不可用"
	],
	[
		"swarm services",
		"个 Swarm 服务"
	],
	[
		"Swarm services",
		"Swarm 服务"
	],
	[
		"Swarm Settings",
		"Swarm 设置"
	],
	[
		"Switch to service selection",
		"切换到服务选择"
	],
	[
		"Sync",
		"同步"
	],
	[
		"Sync networks",
		"同步网络"
	],
	[
		"Synced",
		"已同步"
	],
	[
		"System Information",
		"系统信息"
	],
	[
		"System Monitoring",
		"系统监控"
	],
	[
		"System must support CUDA for GPU acceleration",
		"系统必须支持使用 CUDA 进行 GPU 加速"
	],
	[
		"System Requirements:",
		"系统要求："
	],
	[
		"tab to see when the container starts running.",
		"选项卡，确认容器何时开始运行"
	],
	[
		"Tag",
		"标签"
	],
	[
		"Tag Created",
		"标签已创建"
	],
	[
		"Tag deleted successfully",
		"标签删除成功"
	],
	[
		"Tag Name",
		"标签名称"
	],
	[
		"Tag name is required",
		"标签名称为必填项"
	],
	[
		"Tag name must be less than 50 characters",
		"标签名称必须少于 50 个字符"
	],
	[
		"Tag name must start and end with a letter, number, hyphen or underscore. Spaces are allowed in between.",
		"标签名称必须以字母、数字、连字符或下划线开头和结尾，中间允许使用空格"
	],
	[
		"Tag not found",
		"未找到标签"
	],
	[
		"Tag not found or you don't have permission to delete it",
		"未找到标签，或您无权删除该标签"
	],
	[
		"Tag not found or you don't have permission to update it",
		"未找到标签，或您无权更新该标签"
	],
	[
		"Tag not found or you don't have permission to use it",
		"未找到标签，或您无权使用该标签"
	],
	[
		"Tag Updated",
		"标签已更新"
	],
	[
		"Tagline shown on the login/onboarding pages. Defaults to the standard Dokploy description if empty.",
		"显示在登录和引导页面上的标语。留空时使用 Dokploy 的默认描述"
	],
	[
		"Tags",
		"标签"
	],
	[
		"Target",
		"目标"
	],
	[
		"Target Environment",
		"目标环境"
	],
	[
		"Target platforms for task scheduling",
		"任务调度的目标平台"
	],
	[
		"Target Port",
		"目标端口"
	],
	[
		"Target port is required",
		"目标端口为必填项"
	],
	[
		"Target Port:",
		"目标端口："
	],
	[
		"Target Project",
		"目标项目"
	],
	[
		"Target user is not a member of this organization",
		"目标用户不是此组织的成员"
	],
	[
		"Task Name",
		"任务名称"
	],
	[
		"Team access",
		"团队访问权限"
	],
	[
		"Team Collaboration",
		"团队协作"
	],
	[
		"Template",
		"模板"
	],
	[
		"template and add it to your project.",
		"模板创建应用并将其添加到你的项目"
	],
	[
		"Template imported successfully",
		"模板导入成功"
	],
	[
		"Template Information",
		"模板信息"
	],
	[
		"Tenant ID",
		"租户 ID"
	],
	[
		"Tenant ID is required",
		"租户 ID 为必填项"
	],
	[
		"Terminal",
		"终端"
	],
	[
		"Terminal (",
		"终端 ("
	],
	[
		"Test Commands",
		"测试命令"
	],
	[
		"Test connection",
		"测试连接"
	],
	[
		"Test Connection",
		"测试连接"
	],
	[
		"Test Notification",
		"测试通知"
	],
	[
		"Test Registry",
		"测试镜像仓库"
	],
	[
		"Test your domain by visiting:",
		"访问以下地址测试您的域名："
	],
	[
		"Thank you for choosing Dokploy Cloud! 🚀 We're excited to have you onboard. Before you dive in, you'll need to configure your remote server to unlock all the features we offer.",
		"感谢你选择 Dokploy Cloud！🚀 很高兴你加入我们。在开始使用之前，需要先配置远程服务器，才能使用我们提供的全部功能"
	],
	[
		"The API URL is defined by your organization's providers",
		"API URL 由你所在组织的提供商定义"
	],
	[
		"The authentication proxy container must be deployed and running on this app's server. Configure it under",
		"身份验证代理容器必须已部署并运行在此应用所在的服务器上。请在以下位置进行配置："
	],
	[
		"The base URL for your AI provider's API",
		"AI 提供商 API 的基础 URL"
	],
	[
		"The command to execute in your container",
		"要在容器中执行的命令"
	],
	[
		"The database container is not running. Please start the service before changing the password.",
		"数据库容器未运行。请先启动服务，再更改密码"
	],
	[
		"The default Docker address pool is exhausted around ~30 networks unless",
		"默认 Docker 地址池在约 30 个网络时就会耗尽，除非"
	],
	[
		"The domain is publicly accessible.",
		"此域名可公开访问"
	],
	[
		"The duration in which requests are counted",
		"统计请求数量的时间范围"
	],
	[
		"The following nodes are not ready or have been drained. Containers scheduled on these nodes may not be running.",
		"以下节点尚未就绪或已被排空，调度到这些节点的容器可能未运行"
	],
	[
		"The home of something big!",
		"伟大事业的起点！"
	],
	[
		"The name of the Docker volume to backup",
		"要备份的 Docker 卷名称"
	],
	[
		"The name of the network to attach to",
		"要连接到的网络名称"
	],
	[
		"The new Issuer URL is not in the organization's trusted origins list. Please add it in Manage origins before saving.",
		"新的颁发者 URL 不在组织的可信来源列表中。请先在“管理来源”中添加，然后再保存"
	],
	[
		"The Open Source alternative to Netlify, Vercel, Heroku.",
		"Netlify、Vercel、Heroku 的开源替代方案"
	],
	[
		"The owner role is nontransferable",
		"所有者角色不可转让"
	],
	[
		"The path where your application expects to receive requests internally (defaults to \"/\")",
		"应用在内部接收请求的路径（默认为“/”）"
	],
	[
		"The port inside your container that the service is listening on.",
		"容器内服务监听的端口"
	],
	[
		"The port on your host machine that will be mapped to the target port.",
		"主机上将映射到目标端口的端口"
	],
	[
		"The port where your application is running inside the container (e.g., 3000 for Node.js, 80 for Nginx, 8080 for Java)",
		"应用在容器内运行的端口（例如 Node.js 使用 3000、Nginx 使用 80、Java 使用 8080）"
	],
	[
		"the ports allows you to expose your application to the internet",
		"端口可用于将应用暴露到互联网"
	],
	[
		"The secret key of an API key with the",
		"具有"
	],
	[
		"The server has been updated. The page will be reloaded to reflect the changes...",
		"服务器已更新。页面将重新加载以应用更改..."
	],
	[
		"The server is being updated, please wait...",
		"正在更新服务器，请稍候..."
	],
	[
		"The Traefik container will be recreated from scratch. This means the container will be deleted and created again, which may cause downtime in your applications.",
		"Traefik 容器将从头重新创建。这意味着该容器会被删除并再次创建，可能导致您的应用暂时中断"
	],
	[
		"the Traefik dashboard?",
		"Traefik 仪表板吗？"
	],
	[
		"The URL where POST requests will be sent with notification data.",
		"通知数据将通过 POST 请求发送到此 URL"
	],
	[
		"The user can sign in with this password immediately",
		"用户可立即使用此密码登录"
	],
	[
		"There are no directories or files in",
		"此服务器上的以下路径中尚无任何目录或文件："
	],
	[
		"These records exist in Dokploy but their network is gone from Docker.",
		"这些记录存在于 Dokploy 中，但对应网络已从 Docker 中消失"
	],
	[
		"These services exist in the swarm but have no running containers. They may be scaled to 0 replicas or failing to start.",
		"这些服务存在于 Swarm 中，但没有正在运行的容器。它们的副本数可能已缩减为 0，或启动失败"
	],
	[
		"This account already exists but isn't linked to that sign-in provider yet. Contact your administrator to link it.",
		"此账户已存在，但尚未关联该登录提供商。请联系管理员进行关联"
	],
	[
		"This action cannot be undone",
		"此操作无法撤销"
	],
	[
		"This action cannot be undone.",
		"此操作无法撤销"
	],
	[
		"This action cannot be undone. This will change the refresh token and other tokens will be invalidated.",
		"此操作无法撤销。这将更改刷新令牌，并使其他令牌失效"
	],
	[
		"This action cannot be undone. This will permanently delete the service. If you are sure please enter the service name to delete this service.",
		"此操作无法撤销，将永久删除该服务。如果确定要删除，请输入服务名称"
	],
	[
		"This action will completely reset your database to its initial state. All data, tables, and configurations will be removed.",
		"此操作会将数据库完全重置为初始状态。所有数据、表和配置都将被删除"
	],
	[
		"This action will:",
		"此操作将："
	],
	[
		"This application is connected to a",
		"此应用已连接到一个"
	],
	[
		"This can happen when:",
		"可能的原因："
	],
	[
		"This could be caused by:",
		"可能的原因包括："
	],
	[
		"This Dokploy server",
		"此 Dokploy 服务器"
	],
	[
		"This domain must share the same base domain as the authentication domain (e.g.",
		"此域名必须与身份验证域名使用相同的根域名（例如"
	],
	[
		"This environment have active services, please delete them first.",
		"此环境中有正在运行的服务，请先将其删除"
	],
	[
		"This feature creates an isolated environment for your deployment by adding unique prefixes to all resources. It establishes a dedicated network based on your compose file's name, ensuring your services run in isolation. This prevents conflicts when running multiple instances of the same template or services with identical names.",
		"此功能会为所有资源添加唯一前缀，为部署创建隔离环境。它会根据 Compose 文件名建立专用网络，确保服务彼此隔离运行，从而避免运行同一模板的多个实例或同名服务时发生冲突"
	],
	[
		"This feature is only available for self-hosted instances",
		"此功能仅适用于自托管实例"
	],
	[
		"This feature is only available in Dokploy Cloud",
		"此功能仅在 Dokploy Cloud 中可用"
	],
	[
		"This feature is part of Dokploy Enterprise. Add a valid license to use it.",
		"此功能属于 Dokploy 企业版。请添加有效许可证以使用此功能"
	],
	[
		"This feature requires Docker Swarm to be initialized and active. To get started:",
		"此功能需要初始化并启用 Docker Swarm。请按以下步骤开始："
	],
	[
		"This file is larger than 512KB. Showing a truncated preview; editing is disabled. Use Download to get the truncated content or the terminal for full access.",
		"此文件大于 512KB。当前显示的是截断预览，无法编辑。可使用“下载”获取截断内容，或通过终端完整访问"
	],
	[
		"This image expects its data directory under",
		"此镜像要求其数据目录位于"
	],
	[
		"This provider can only be referenced from the selected projects. Pick environments to narrow it further — none selected means all environments of that project.",
		"此提供商只能由所选项目引用。可选择环境进一步限制范围；未选择环境表示该项目的所有环境"
	],
	[
		"This provider is shared with the organization. Deleting it will remove access for all members. Are you sure?",
		"此提供商已与组织共享。删除后，所有成员都将失去访问权限。确定要删除吗？"
	],
	[
		"This section works on your remote servers. Add your first server to start managing it from here.",
		"此部分用于管理远程服务器。添加第一台服务器，即可在此进行管理"
	],
	[
		"This section works on your remote servers. Ask an administrator to add a server to your organization.",
		"此部分用于管理远程服务器。请联系管理员为你的组织添加服务器"
	],
	[
		"This server is deactivated due to lack of payment. Please pay your invoice to reactivate it. If you think this is an error, please contact support.",
		"此服务器因欠费已停用。请支付账单以重新激活。如果你认为这是系统错误，请联系支持人员"
	],
	[
		"This server is for databases...",
		"此服务器用于数据库..."
	],
	[
		"This service is detached from dokploy-network but has no other network attached. It would be unreachable, so dokploy-network will be kept until you attach a network below.",
		"此服务已与 dokploy-network 断开，但尚未连接其他网络。为避免服务无法访问，在您从下方连接网络之前，系统将保留 dokploy-network"
	],
	[
		"This service is hosted on the server",
		"此服务托管在服务器"
	],
	[
		"This tag is already assigned to this project",
		"此标签已分配给该项目"
	],
	[
		"This template doesn't require any configuration files.",
		"此模板不需要任何配置文件"
	],
	[
		"This template requires the following configuration files to be mounted:",
		"此模板需要挂载以下配置文件："
	],
	[
		"This user has a custom role assigned. Capabilities are defined by the role. You can still manage which projects, environments, and services they can access below.",
		"此用户已分配自定义角色，其功能权限由该角色定义。你仍可在下方管理其可访问的项目、环境和服务"
	],
	[
		"This vault provider is not enabled for the given project/environment",
		"此保管库提供商未对指定项目/环境启用"
	],
	[
		"This view shows containers deployed as",
		"此视图显示部署为"
	],
	[
		"This will be the email of the new user",
		"这将作为新用户的邮箱地址"
	],
	[
		"This will be the name of the Docker Swarm service",
		"这将作为 Docker Swarm 服务的名称"
	],
	[
		"This will cancel all the incoming deployments",
		"这将取消所有即将执行的部署"
	],
	[
		"This will change the",
		"这将同时更改正在运行的数据库容器和 Dokploy 中的"
	],
	[
		"This will create an application from the",
		"这将使用"
	],
	[
		"This will delete all old deployment records and logs, keeping only the active deployment (the most recent successful one).",
		"这将删除所有旧部署记录和日志，仅保留当前部署（最近一次成功的部署）"
	],
	[
		"This will delete the server and all associated data",
		"这将删除服务器及所有相关数据"
	],
	[
		"This will enable GPU support for Docker Swarm on this server. Make sure you have the required hardware and drivers installed.",
		"这将在此服务器上启用 Docker Swarm 的 GPU 支持。请确保已安装所需硬件和驱动程序"
	],
	[
		"This will kill the build process",
		"这将终止构建进程"
	],
	[
		"This will permanently disable Two-Factor Authentication for your account. Your account will be less secure without 2FA enabled.",
		"这将永久禁用您账户的双重身份验证。未启用 2FA 会降低账户的安全性"
	],
	[
		"This will permanently remove the container",
		"此操作将永久删除容器"
	],
	[
		"This will randomize the compose file and will add a suffix to the property to avoid conflicts",
		"这会随机化 Compose 文件，并为相关属性添加后缀以避免冲突"
	],
	[
		"This will remove all build cache entries that are not currently in use. This action cannot be undone.",
		"这将删除当前未使用的所有构建缓存条目。此操作无法撤销"
	],
	[
		"This will setup the server and all associated data",
		"这将设置服务器及所有相关数据"
	],
	[
		"This will update the web server to the new version. You will not be able to use the panel during the update process. The page will be reloaded once the update is finished.",
		"这会将 Web 服务器更新到新版本。更新期间无法使用面板。更新完成后，页面将重新加载"
	],
	[
		"Threads) @",
		"个线程），频率"
	],
	[
		"Time",
		"时间"
	],
	[
		"Time between health checks (e.g., 10000000000 for 10 seconds)",
		"健康检查之间的间隔时间（例如 10000000000 表示 10 秒）"
	],
	[
		"Time range",
		"时间范围"
	],
	[
		"Time to wait before forcefully killing a container. Specified in nanoseconds (e.g., 10000000000 = 10 seconds). Allows containers to shutdown gracefully.",
		"强制终止容器前的等待时间。以纳秒为单位（例如 10000000000 = 10 秒），以便容器正常关闭"
	],
	[
		"Time to wait before forcefully killing the container",
		"强制终止容器前的等待时间"
	],
	[
		"Time Window",
		"时间窗口"
	],
	[
		"Time window to evaluate restart policy",
		"评估重启策略的时间窗口"
	],
	[
		"Timeout (nanoseconds)",
		"超时（纳秒）"
	],
	[
		"Timezone",
		"时区"
	],
	[
		"Title",
		"标题"
	],
	[
		"TLS Status:",
		"TLS 状态："
	],
	[
		"To access the application it is required to set at least 1 domain",
		"必须至少设置 1 个域名才能访问应用"
	],
	[
		"to add a registry.",
		"添加镜像仓库"
	],
	[
		"To add nodes to your cluster, you need to configure at least one registry.",
		"要向集群添加节点，你需要至少配置一个镜像仓库"
	],
	[
		"To Addresses",
		"收件人地址"
	],
	[
		"To confirm, type",
		"若要确认，请输入"
	],
	[
		"To create a backup it is required to set at least 1 provider.",
		"要创建备份，必须至少配置一个提供商"
	],
	[
		"To create a backup it is required to set at least 1 provider. Please, go to",
		"要创建备份，必须至少设置 1 个提供商。请前往"
	],
	[
		"To deploy using Bitbucket, you need to configure your account first. Please, go to",
		"要使用 Bitbucket 进行部署，需要先配置账户。请前往"
	],
	[
		"To deploy using Gitea, you need to configure your account first. Please, go to",
		"要使用 Gitea 进行部署，需要先配置账户。请前往"
	],
	[
		"To deploy using GitHub, you need to configure your account first. Please, go to",
		"要使用 GitHub 进行部署，需要先配置账户。请前往"
	],
	[
		"To deploy using GitLab, you need to configure your account first. Please, go to",
		"要使用 GitLab 进行部署，需要先配置账户。请前往"
	],
	[
		"to do so.",
		"进行配置"
	],
	[
		"to fix the database url connection.",
		"以修复数据库 URL 连接问题"
	],
	[
		"To integrate your Gitea account, you need to create a new application in your Gitea settings. Follow these steps:",
		"要集成 Gitea 账户，需要在 Gitea 设置中创建一个新应用。请按以下步骤操作："
	],
	[
		"To integrate your GitHub account with our services, you'll need to create and install a GitHub app. This process is straightforward and only takes a few minutes. Click the button below to get started.",
		"要将您的 GitHub 账户与我们的服务集成，您需要创建并安装一个 GitHub App。此过程很简单，只需几分钟。点击下方按钮即可开始"
	],
	[
		"To integrate your GitLab account, you need to create a new application in your GitLab settings. Follow these steps:",
		"要集成您的 GitLab 账户，您需要在 GitLab 设置中创建一个新应用。请按以下步骤操作："
	],
	[
		"To make your domain accessible, you need to configure your DNS records with your domain provider (e.g., Cloudflare, GoDaddy, NameCheap).",
		"要使域名可访问，您需要在域名提供商（例如 Cloudflare、GoDaddy、NameCheap）处配置 DNS 记录"
	],
	[
		"to make your sslip.io domain work.",
		"中设置 IP 地址，才能使您的 sslip.io 域名正常工作"
	],
	[
		"To see containers in this view, make sure your applications are:",
		"若要在此视图中查看容器，请确保应用："
	],
	[
		"To send notifications it is required to set at least 1 provider.",
		"要发送通知，必须至少设置一个提供商"
	],
	[
		"To setup a server, please click on the button below.",
		"要设置服务器，请点击下方按钮"
	],
	[
		"to this role. Reassign them before deleting.",
		"到此角色。请先重新分配这些成员，再删除此角色"
	],
	[
		"To unlock extra features you need an enterprise license key. Contact us",
		"要解锁更多功能，您需要企业许可证密钥。联系我们"
	],
	[
		"To use a cluster feature, you need to configure at least a registry first. Please, go to",
		"要使用集群功能，您需要先配置至少一个镜像仓库。请前往"
	],
	[
		"To use AI-powered template generation, please",
		"要使用 AI 模板生成功能，请"
	],
	[
		"Toggle autodeploy",
		"切换自动部署"
	],
	[
		"Toggle bold",
		"切换粗体"
	],
	[
		"Toggle clean cache",
		"切换清理缓存"
	],
	[
		"Toggle Sidebar",
		"切换侧边栏"
	],
	[
		"Toggle theme",
		"切换主题"
	],
	[
		"Token",
		"令牌"
	],
	[
		"Token exchange failed",
		"令牌交换失败"
	],
	[
		"Token for authenticating metrics requests",
		"用于验证指标请求的令牌"
	],
	[
		"Token generated successfully",
		"令牌生成成功"
	],
	[
		"Token is required",
		"令牌为必填项"
	],
	[
		"Token not found",
		"未找到令牌"
	],
	[
		"Topic",
		"主题"
	],
	[
		"Topic is required",
		"主题为必填项"
	],
	[
		"Total Nodes",
		"节点总数"
	],
	[
		"Total number of requests allowed (leave empty for unlimited)",
		"允许的请求总数（留空表示无限制）"
	],
	[
		"Total Request Limit",
		"请求总数上限"
	],
	[
		"Total:",
		"总计："
	],
	[
		"Track all actions performed by members in your organization.",
		"跟踪组织成员执行的所有操作"
	],
	[
		"Traefik config",
		"Traefik 配置"
	],
	[
		"Traefik config Updated",
		"Traefik 配置已更新"
	],
	[
		"Traefik dashboard updated successfully",
		"Traefik 仪表板已成功更新"
	],
	[
		"Traefik Env Updated",
		"Traefik 环境变量已更新"
	],
	[
		"Traefik File System",
		"Traefik 文件系统"
	],
	[
		"Traefik Files",
		"Traefik 文件"
	],
	[
		"Traefik middleware reference",
		"Traefik 中间件引用"
	],
	[
		"Traefik Reloaded",
		"Traefik 已重新加载"
	],
	[
		"Traefik supports Go templating in dynamic configs (e.g.",
		"Traefik 的动态配置支持 Go 模板（例如"
	],
	[
		"Trigger and manage deployments only",
		"仅可触发和管理部署"
	],
	[
		"Trigger manual backups",
		"触发手动备份"
	],
	[
		"Trigger new deployments manually",
		"手动触发新部署"
	],
	[
		"Trigger the action when a database backup is created.",
		"创建数据库备份时触发此操作"
	],
	[
		"Trigger the action when a Dokploy backup is created.",
		"创建 Dokploy 备份时触发此操作"
	],
	[
		"Trigger the action when a volume backup is created.",
		"创建卷备份时触发此操作"
	],
	[
		"Trigger the action when an app is deployed.",
		"应用部署时触发此操作"
	],
	[
		"Trigger the action when Docker cleanup is performed.",
		"执行 Docker 清理时触发此操作"
	],
	[
		"Trigger the action when Dokploy is restarted.",
		"Dokploy 重启时触发此操作"
	],
	[
		"Trigger the action when the build fails.",
		"构建失败时触发此操作"
	],
	[
		"Trigger the action when the server threshold is reached.",
		"达到服务器阈值时触发此操作"
	],
	[
		"Trigger Type",
		"触发类型"
	],
	[
		"Trigger, view, and cancel service deployments",
		"触发、查看和取消服务部署"
	],
	[
		"Trusted origin added",
		"可信源已添加"
	],
	[
		"Trusted origin removed",
		"可信源已移除"
	],
	[
		"Trusted origin updated",
		"可信源已更新"
	],
	[
		"Trusted origins",
		"可信源"
	],
	[
		"Try adjusting your search or filters",
		"请尝试调整搜索内容或筛选条件"
	],
	[
		"TTL (optional)",
		"TTL（可选）"
	],
	[
		"Turn Off Container During Backup",
		"备份期间关闭容器"
	],
	[
		"Turn on/off AI functionality",
		"开启或关闭 AI 功能"
	],
	[
		"Two-Factor Authentication Status",
		"双因素身份验证状态"
	],
	[
		"Type",
		"类型"
	],
	[
		"Type (A-Z)",
		"类型（A-Z）"
	],
	[
		"type (not",
		"类型（而非"
	],
	[
		"Type (Z-A)",
		"类型（Z-A）"
	],
	[
		"Type: A",
		"类型：A"
	],
	[
		"Ubuntu/Debian OS support is currently supported (Experimental)",
		"目前支持 Ubuntu/Debian 操作系统（实验性）"
	],
	[
		"UFW (Uncomplicated Firewall) is a simple firewall that can be used to block incoming and outgoing traffic from your server.",
		"UFW（简易防火墙）是一款简单的防火墙，可用于阻止服务器的入站和出站流量"
	],
	[
		"UFW Installed",
		"UFW 已安装"
	],
	[
		"Unauthorized",
		"未授权"
	],
	[
		"Uncollectible",
		"无法收款"
	],
	[
		"Unique identifier; used in callback URL path.",
		"唯一标识符；用于回调 URL 路径"
	],
	[
		"Unknown",
		"未知"
	],
	[
		"Unknown error",
		"未知错误"
	],
	[
		"Unleash the power of AI and test AI-generated code in a sandbox before deploying to a live URL.",
		"释放 AI 的强大能力，在部署到线上 URL 之前，先在沙盒中测试 AI 生成的代码"
	],
	[
		"Unlink",
		"取消关联"
	],
	[
		"Unlink User",
		"解除用户关联"
	],
	[
		"Unlock",
		"解锁"
	],
	[
		"Unlock advanced capabilities like SSO, Audit logs, whitelabeling and more.",
		"解锁 SSO、审计日志、白标等高级功能"
	],
	[
		"Unlock powerful features to streamline your deployments and manage projects effortlessly.",
		"解锁强大功能，简化部署并轻松管理项目"
	],
	[
		"Unmark deletion",
		"取消删除标记"
	],
	[
		"Unnamed passkey",
		"未命名的通行密钥"
	],
	[
		"Unsure if you already have an app?",
		"不确定是否已有 App？"
	],
	[
		"Update",
		"更新"
	],
	[
		"Update a backup",
		"更新备份"
	],
	[
		"Update Available",
		"有可用更新"
	],
	[
		"Update Backup",
		"更新备份"
	],
	[
		"Update Bitbucket",
		"更新 Bitbucket"
	],
	[
		"Update Config",
		"更新配置"
	],
	[
		"Update config updated successfully",
		"更新配置成功"
	],
	[
		"Update DNS Provider",
		"更新 DNS 提供商"
	],
	[
		"Update Github",
		"更新 GitHub"
	],
	[
		"Update GitLab",
		"更新 GitLab"
	],
	[
		"Update OIDC provider",
		"更新 OIDC 提供商"
	],
	[
		"Update order strategy",
		"更新顺序策略"
	],
	[
		"Update organization",
		"更新组织"
	],
	[
		"Update permissions for this role",
		"更新此角色的权限"
	],
	[
		"Update provider",
		"更新提供商"
	],
	[
		"Update Role",
		"更新角色"
	],
	[
		"Update SAML provider",
		"更新 SAML 提供商"
	],
	[
		"Update Schedule",
		"更新定时任务"
	],
	[
		"Update scheduled job configuration",
		"更新定时任务配置"
	],
	[
		"Update Server",
		"更新服务器"
	],
	[
		"Update Server IP",
		"更新服务器 IP"
	],
	[
		"Update subscription",
		"更新订阅"
	],
	[
		"Update the application data",
		"更新应用数据"
	],
	[
		"Update the compose data",
		"更新 Compose 数据"
	],
	[
		"Update the env Environment variables that are accessible to all services of this project.",
		"更新此项目中所有服务均可访问的环境变量"
	],
	[
		"Update the environment details.",
		"更新环境详情"
	],
	[
		"Update the environment variables that are accessible to all services in this environment.",
		"更新此环境中所有服务均可访问的环境变量"
	],
	[
		"Update the IP of the server",
		"更新服务器 IP"
	],
	[
		"Update the Libsql data",
		"更新 Libsql 数据"
	],
	[
		"Update the MariaDB data",
		"更新 MariaDB 数据"
	],
	[
		"Update the MongoDB data",
		"更新 MongoDB 数据"
	],
	[
		"Update the mount",
		"更新挂载"
	],
	[
		"Update the MySQL data",
		"更新 MySQL 数据"
	],
	[
		"Update the organization name and logo",
		"更新组织名称和徽标"
	],
	[
		"Update the Postgres data",
		"更新 Postgres 数据"
	],
	[
		"Update the redis data",
		"更新 Redis 数据"
	],
	[
		"Update the tag name and color",
		"更新标签名称和颜色"
	],
	[
		"Update the traefik config",
		"更新 Traefik 配置"
	],
	[
		"Update the traefik environment variables",
		"更新 Traefik 环境变量"
	],
	[
		"Update this DNS record.",
		"更新此 DNS 记录"
	],
	[
		"Update traefik config",
		"更新 Traefik 配置"
	],
	[
		"Update Traefik Environment",
		"更新 Traefik 环境变量"
	],
	[
		"Update Vault Provider",
		"更新 Vault 提供商"
	],
	[
		"Update volume backup configuration",
		"更新卷备份配置"
	],
	[
		"Update your Bitbucket authentication. Use API Token for enhanced security (recommended) or App Password for legacy support.",
		"更新 Bitbucket 身份验证。建议使用更安全的 API 令牌，也可使用应用密码以兼容旧版"
	],
	[
		"Update your Gitea provider details.",
		"更新 Gitea 提供商信息"
	],
	[
		"Update your notification providers for multiple channels.",
		"更新用于多个渠道的通知提供商"
	],
	[
		"Update: Error updating Mariadb",
		"更新 MariaDB 数据库时出错"
	],
	[
		"Update: Error updating Mongo",
		"更新 MongoDB 数据库时出错"
	],
	[
		"Update: Error updating MySQL",
		"更新 MySQL 数据库时出错"
	],
	[
		"Updated",
		"已更新"
	],
	[
		"Updating",
		"更新"
	],
	[
		"Updating the mount will recreate the file or directory.",
		"更新挂载将重新创建文件或目录"
	],
	[
		"Updating...",
		"正在更新..."
	],
	[
		"Updating…",
		"正在更新…"
	],
	[
		"Upgrade plan",
		"升级套餐"
	],
	[
		"Upgrade your plan",
		"升级套餐"
	],
	[
		"Upgrading…",
		"正在升级…"
	],
	[
		"Upload a file directly into the container's filesystem",
		"将文件直接上传到容器的文件系统"
	],
	[
		"Upload File",
		"上传文件"
	],
	[
		"Upload File to Container",
		"将文件上传到容器"
	],
	[
		"Upload or generate a certificate to secure your application",
		"上传或生成证书以保护你的应用"
	],
	[
		"Uptime",
		"运行时间"
	],
	[
		"URL path for this service",
		"此服务的 URL 路径"
	],
	[
		"URL where metrics will be sent",
		"接收指标数据的 URL"
	],
	[
		"URL:",
		"URL："
	],
	[
		"Usage",
		"使用情况"
	],
	[
		"Use",
		"使用"
	],
	[
		"Use \"root\" or a non-root user with passwordless sudo access.",
		"请使用“root”用户，或具有免密码 sudo 权限的非 root 用户"
	],
	[
		"Use a custom issuer to identify the service you're authenticating with.",
		"使用自定义颁发者来标识您正在进行身份验证的服务"
	],
	[
		"Use a DNS lookup tool to verify your records",
		"使用 DNS 查询工具验证您的记录"
	],
	[
		"Use an IAM user/role scoped to",
		"使用权限范围限定为以下项目的 IAM 用户/角色"
	],
	[
		"Use custom entrypoint for domain",
		"为域名使用自定义入口点"
	],
	[
		"Use custom model: \"",
		"使用自定义模型：\""
	],
	[
		"Use custom registries like Docker Hub, DigitalOcean Registry, etc.",
		"使用 Docker Hub、DigitalOcean Registry 等自定义镜像仓库"
	],
	[
		"Use Edit to change provider settings (OIDC or SAML).",
		"使用“编辑”更改提供商设置（OIDC 或 SAML）"
	],
	[
		"Use email and password instead",
		"改用邮箱和密码登录"
	],
	[
		"Use if you want to back up in a specific path of your destination/bucket",
		"如果要备份到存储目标或存储桶中的特定路径，请使用此项"
	],
	[
		"Use PAM",
		"使用 PAM"
	],
	[
		"Use predefined versions",
		"使用预定义版本"
	],
	[
		"Use Replica Sets",
		"使用副本集"
	],
	[
		"Use this in case you want to deploy the same compose file and you have conflicts with some property like volumes, networks, etc.",
		"如果要部署相同的 Compose 文件，但卷、网络等属性存在冲突，可以使用此功能"
	],
	[
		"Use this public key when creating a server in your preferred provider (Hostinger, Digital Ocean, Hetzner, etc.)",
		"通过首选提供商（Hostinger、Digital Ocean、Hetzner 等）创建服务器时，请使用此公钥"
	],
	[
		"Use this syntax to reference environment-level variables in your service environments:",
		"在服务的环境变量中引用环境级变量时，请使用以下语法："
	],
	[
		"Use this syntax to reference project-level variables in your service environments:",
		"在服务环境中引用项目级变量时，请使用以下语法："
	],
	[
		"Use when Gitea runs on the same instance as Dokploy. Used for OAuth token exchange to reach Gitea via internal network (e.g. Docker service name).",
		"当 Gitea 与 Dokploy 运行在同一实例上时使用。OAuth 令牌交换将通过内部网络访问 Gitea（例如使用 Docker 服务名称）"
	],
	[
		"Use when GitLab runs on the same instance as Dokploy. Used for OAuth token exchange to reach GitLab via internal network (e.g. Docker service name).",
		"当 GitLab 与 Dokploy 运行在同一实例上时使用。用于在 OAuth 令牌交换过程中通过内部网络访问 GitLab（例如使用 Docker 服务名称）"
	],
	[
		"Used",
		"已使用"
	],
	[
		"Used (GB)",
		"已使用（GB）"
	],
	[
		"Used on Dokploy Cloud",
		"用于 Dokploy Cloud"
	],
	[
		"Used:",
		"已使用："
	],
	[
		"User",
		"用户"
	],
	[
		"User created with initial credentials",
		"已使用初始凭据创建用户"
	],
	[
		"User deleted successfully",
		"用户删除成功"
	],
	[
		"User ID",
		"用户 ID"
	],
	[
		"User Impersonation",
		"用户身份模拟"
	],
	[
		"User is already a member of this organization",
		"该用户已是此组织的成员"
	],
	[
		"User is in docker group",
		"用户已加入 docker 用户组"
	],
	[
		"User is not a member of your active organization",
		"该用户不是你当前组织的成员"
	],
	[
		"User is not in docker group",
		"用户未加入 docker 用户组"
	],
	[
		"User Key",
		"用户密钥"
	],
	[
		"User Key is required",
		"用户密钥为必填项"
	],
	[
		"User must have sudo/administrative privileges",
		"用户必须具有 sudo/管理员权限"
	],
	[
		"User not found",
		"未找到用户"
	],
	[
		"User not found in this organization",
		"在此组织中未找到该用户"
	],
	[
		"User registered successfully",
		"用户注册成功"
	],
	[
		"User unlinked successfully",
		"用户关联已成功解除"
	],
	[
		"User:",
		"用户："
	],
	[
		"Username",
		"用户名"
	],
	[
		"Username is required",
		"用户名为必填项"
	],
	[
		"Users",
		"用户"
	],
	[
		"uses a Traefik cert resolver by name (defined in your static configuration).",
		"使用指定名称的 Traefik 证书解析器（在静态配置中定义）"
	],
	[
		"Using a lower refresh rate will make your CPU and memory usage higher, we recommend 30-60 seconds",
		"刷新间隔越短，CPU 和内存占用越高，建议设置为 30 至 60 秒"
	],
	[
		"Using a registry",
		"使用镜像仓库"
	],
	[
		"using an OIDC provider.",
		"，并使用 OIDC 提供商"
	],
	[
		"UTC (default)",
		"UTC（默认）"
	],
	[
		"Valid",
		"有效"
	],
	[
		"Valid enterprise license required",
		"需要有效的企业版许可证"
	],
	[
		"Valid Invitation!",
		"邀请有效！"
	],
	[
		"Validate",
		"验证"
	],
	[
		"Validate DNS",
		"验证 DNS"
	],
	[
		"Value",
		"值"
	],
	[
		"Value is copied to clipboard",
		"值已复制到剪贴板"
	],
	[
		"Value:",
		"值："
	],
	[
		"Variable Name",
		"变量名"
	],
	[
		"Variable Value",
		"变量值"
	],
	[
		"Vault provider created",
		"Vault 提供商已创建"
	],
	[
		"Vault provider updated",
		"Vault 提供商已更新"
	],
	[
		"Vault URI is required",
		"Vault URI 为必填项"
	],
	[
		"Vault URL is required",
		"Vault URL 为必填项"
	],
	[
		"Verification Code",
		"验证码"
	],
	[
		"Verify",
		"验证"
	],
	[
		"Verify it's active:",
		"验证其是否已启用："
	],
	[
		"Verify Status",
		"验证状态"
	],
	[
		"Verify Your Identity",
		"验证您的身份"
	],
	[
		"Verify your server",
		"验证服务器"
	],
	[
		"Verifying Services...",
		"正在验证服务..."
	],
	[
		"Version",
		"版本"
	],
	[
		"Version:",
		"版本："
	],
	[
		"View",
		"查看"
	],
	[
		"View Actions",
		"查看操作"
	],
	[
		"view all →",
		"查看全部 →"
	],
	[
		"View and edit environment variables of services",
		"查看和编辑服务的环境变量"
	],
	[
		"View and edit shared environment variables at environment level",
		"查看和编辑环境级共享环境变量"
	],
	[
		"View and edit shared environment variables at project level",
		"查看和编辑项目级共享环境变量"
	],
	[
		"View backup history and status",
		"查看备份历史和状态"
	],
	[
		"View Config",
		"查看配置"
	],
	[
		"View configured DNS providers and their zones/records",
		"查看已配置的 DNS 提供商及其区域/记录"
	],
	[
		"View configured Docker registries",
		"查看已配置的 Docker 镜像仓库"
	],
	[
		"View CPU, RAM, disk, and network metrics",
		"查看 CPU、RAM、磁盘和网络指标"
	],
	[
		"View deployment history and status",
		"查看部署历史和状态"
	],
	[
		"View details",
		"查看详情"
	],
	[
		"View Docker containers, images, networks, and volumes",
		"查看 Docker 容器、镜像、网络和卷"
	],
	[
		"View Domains",
		"查看域名"
	],
	[
		"View domains assigned to services",
		"查看分配给服务的域名"
	],
	[
		"View environment variable values",
		"查看环境变量值"
	],
	[
		"View environment-level shared environment variables",
		"查看环境级共享环境变量"
	],
	[
		"View environments and their services",
		"查看环境及其服务"
	],
	[
		"View Git provider connections",
		"查看 Git 提供商连接"
	],
	[
		"View image config",
		"查看镜像配置"
	],
	[
		"View Logs",
		"查看日志"
	],
	[
		"View Mounts",
		"查看挂载"
	],
	[
		"View network config",
		"查看网络配置"
	],
	[
		"View Networks",
		"查看网络"
	],
	[
		"View notification providers",
		"查看通知提供商"
	],
	[
		"View project-level shared environment variables",
		"查看项目级共享环境变量"
	],
	[
		"View providers and secret names for env autocomplete",
		"查看用于环境变量自动补全的提供商和密钥名称"
	],
	[
		"View real-time and historical logs",
		"查看实时和历史日志"
	],
	[
		"View releases",
		"查看发布版本"
	],
	[
		"View Repository",
		"查看仓库"
	],
	[
		"View S3 backup destinations",
		"查看 S3 备份存储目标"
	],
	[
		"View scheduled jobs and their history",
		"查看定时任务及其历史记录"
	],
	[
		"View server and service metrics (CPU, RAM, disk)",
		"查看服务器和服务指标（CPU、RAM、磁盘）"
	],
	[
		"View server list and connection details",
		"查看服务器列表和连接详情"
	],
	[
		"View service and deployment logs",
		"查看服务和部署日志"
	],
	[
		"View services, logs, and deployments",
		"查看服务、日志和部署"
	],
	[
		"View SSH key configurations",
		"查看 SSH 密钥配置"
	],
	[
		"View SSL/TLS certificates",
		"查看 SSL/TLS 证书"
	],
	[
		"View tags",
		"查看标签"
	],
	[
		"View the audit log history",
		"查看审计日志历史记录"
	],
	[
		"View the audit log of actions performed in the organization",
		"查看组织内操作的审计日志"
	],
	[
		"View the list of organization members",
		"查看组织成员列表"
	],
	[
		"View the logs for",
		"查看以下容器的日志："
	],
	[
		"View Traefik configuration files",
		"查看 Traefik 配置文件"
	],
	[
		"View Tutorial",
		"查看教程"
	],
	[
		"View volume backup history and status",
		"查看卷备份历史和状态"
	],
	[
		"View volume config",
		"查看卷配置"
	],
	[
		"View volumes and mounts attached to services",
		"查看附加到服务的卷和挂载"
	],
	[
		"Viewer",
		"查看者"
	],
	[
		"Viewing server",
		"当前服务器"
	],
	[
		"VIP (Virtual IP)",
		"VIP（虚拟 IP）"
	],
	[
		"Visitors must log in via your identity provider.",
		"访问者必须通过您的身份提供商登录"
	],
	[
		"Void",
		"已作废"
	],
	[
		"Volume",
		"卷"
	],
	[
		"Volume and bind mounts for this container",
		"此容器的卷挂载和绑定挂载"
	],
	[
		"Volume Backup",
		"卷备份"
	],
	[
		"Volume backup deleted successfully",
		"卷备份已成功删除"
	],
	[
		"Volume backup not found",
		"未找到卷备份"
	],
	[
		"Volume backup run successfully",
		"卷备份执行成功"
	],
	[
		"Volume Backups",
		"卷备份"
	],
	[
		"Volume Config",
		"卷配置"
	],
	[
		"Volume deleted",
		"卷已删除"
	],
	[
		"Volume deleted successfully",
		"卷已成功删除"
	],
	[
		"Volume deletion is available for:",
		"以下服务支持删除卷："
	],
	[
		"Volume Files",
		"卷文件"
	],
	[
		"Volume Mount",
		"卷挂载"
	],
	[
		"Volume Name",
		"卷名称"
	],
	[
		"Volume name is required",
		"卷名称为必填项"
	],
	[
		"Volume name required",
		"必须填写卷名称"
	],
	[
		"Volumes",
		"卷"
	],
	[
		"Volumes / Mounts",
		"卷 / 挂载"
	],
	[
		"Wait for DNS propagation (usually 15-30 minutes)",
		"等待 DNS 传播（通常需要 15–30 分钟）"
	],
	[
		"Wait time between restart attempts",
		"两次重启尝试之间的等待时间"
	],
	[
		"Want to access the latest features and improvements",
		"希望使用最新功能和改进"
	],
	[
		"Warning",
		"警告"
	],
	[
		"Warning:",
		"警告：所选服务中有"
	],
	[
		"Warning: Importing a template will remove all existing environment variables, mounts, and domains from this service.",
		"警告：导入模板将移除此服务现有的所有环境变量、挂载和域名"
	],
	[
		"Warning: this service has domains. Detaching it from dokploy-network will break Traefik routing, and its domains will stop working.",
		"警告：此服务已配置域名。断开与 dokploy-network 的连接会导致 Traefik 路由中断，其域名将无法使用"
	],
	[
		"Warning: This will remove all existing environment variables, mounts, and domains from this service.",
		"警告：此操作将移除此服务现有的所有环境变量、挂载和域名"
	],
	[
		"Watch Paths",
		"监视路径"
	],
	[
		"Watch Paths Not Match",
		"监视路径不匹配"
	],
	[
		"Watch the logs of the application in real time",
		"实时查看应用日志"
	],
	[
		"Watch the usage of your compose",
		"查看 Compose 的资源使用情况"
	],
	[
		"Watch the usage of your server in the current app",
		"查看当前应用所在服务器的资源使用情况"
	],
	[
		"We couldn't complete sign-in. Please try again or contact your administrator.",
		"无法完成登录。请重试或联系管理员"
	],
	[
		"We detected that you already have an account with this email. Please sign in to accept the invitation.",
		"检测到此邮箱已注册账户。请登录以接受邀请"
	],
	[
		"We only accept push events or pull_request events",
		"仅接受 push 或 pull_request 事件"
	],
	[
		"We recommend checking for updates regularly to ensure you have the latest features and security improvements.",
		"建议定期检查更新，以获取最新功能和安全改进"
	],
	[
		"We recommend not modifying this script unless you know what you are doing.",
		"除非您清楚自己在做什么，否则不建议修改此脚本"
	],
	[
		"We recommend reviewing the",
		"建议在更新前查看"
	],
	[
		"We recommend verifying that all services are running before updating.",
		"建议在更新前确认所有服务均正常运行"
	],
	[
		"We strongly recommend to use the following distros to ensure the best experience:",
		"为获得最佳体验，强烈建议使用以下发行版："
	],
	[
		"We're sorry, but an unexpected error occurred. Please try again later.",
		"抱歉，发生了意外错误。请稍后重试"
	],
	[
		"Web Server",
		"Web 服务器"
	],
	[
		"Web Server -> Server -> Update Server IP",
		"Web 服务器 → 服务器 → 更新服务器 IP"
	],
	[
		"Web Server Actions",
		"Web 服务器操作"
	],
	[
		"Web server settings",
		"Web 服务器设置"
	],
	[
		"Web server settings not found",
		"未找到 Web 服务器设置"
	],
	[
		"Web Server Update",
		"Web 服务器更新"
	],
	[
		"Webhook URL is required",
		"Webhook URL 为必填项"
	],
	[
		"Webhook URL:",
		"Webhook URL："
	],
	[
		"Welcome back",
		"欢迎回来"
	],
	[
		"Welcome to Dokploy Cloud 🎉",
		"欢迎使用 Dokploy Cloud 🎉"
	],
	[
		"Welcome To Dokploy Cloud 🎉",
		"欢迎使用 Dokploy Cloud 🎉"
	],
	[
		"When enabled, all services (applications, databases, compose) must be deployed to a remote server. Deploying directly to the Dokploy host VM is not allowed.",
		"启用后，所有服务（应用、数据库和 Compose）都必须部署到远程服务器，不允许直接部署到 Dokploy 主机虚拟机"
	],
	[
		"When enabled, an .env file will be created in the same directory as your compose file on every deploy. Disable this to keep a repository-provided .env; the variables above will then be ignored. Takes effect on the next deploy.",
		"启用后，每次部署时都会在 Compose 文件所在目录中创建 .env 文件。若要保留仓库提供的 .env，请禁用此选项；届时将忽略上方的变量。此设置将在下次部署时生效"
	],
	[
		"When enabled, an .env file will be created in the same directory as your Dockerfile during the build process. Disable this if you don't want to generate an environment file.",
		"启用后，构建过程中会在 Dockerfile 所在目录中创建 .env 文件。如果您不想生成环境变量文件，请禁用此选项"
	],
	[
		"When enabled, the email/password login form is hidden and users must sign in exclusively through SSO.",
		"启用后，电子邮件/密码登录表单将被隐藏，用户必须仅通过 SSO 登录"
	],
	[
		"When to restart the container",
		"何时重启容器"
	],
	[
		"When using Host publish mode, Docker Swarm has limitations that prevent proper container updates during deployments. Old containers may not be replaced automatically. Consider using Ingress mode instead, or be prepared to manually stop/start the application after deployments.",
		"使用主机发布模式时，Docker Swarm 存在限制，可能导致部署期间无法正确更新容器。旧容器可能不会自动替换。建议改用 Ingress 模式，或者准备在部署后手动停止并启动应用"
	],
	[
		"When you activate this option, we will include a env `COMPOSE_PREFIX` variable to the compose file so you can use it in your compose file.",
		"启用此选项后，我们会在 Compose 文件中添加环境变量 `COMPOSE_PREFIX`，供你在 Compose 文件中使用"
	],
	[
		"When you activate, you need to reload traefik to apply the changes, you can reload traefik in",
		"启用后，需要重新加载 Traefik 才能应用更改。你可以在以下位置重新加载 Traefik："
	],
	[
		"When your server is ready, you can click on the button below, to directly run the script we use for setup the server or directly modify the script",
		"服务器准备就绪后，你可以点击下方按钮，直接运行我们用于设置服务器的脚本，也可以直接修改该脚本"
	],
	[
		"Whenever you make changes to domains, remember to redeploy your compose to apply the changes.",
		"每次修改域名后，请记得重新部署 Compose 以应用更改"
	],
	[
		"Which provider claims map to each user field. Defaults adapt to the issuer.",
		"指定提供商声明与各用户字段的映射关系。默认值会根据颁发者进行调整"
	],
	[
		"Whitelabeling",
		"白标定制"
	],
	[
		"Whitelabeling allows you to fully customize logos, colors, CSS, error pages, and more. Add a valid license to configure it.",
		"白标定制允许你全面自定义徽标、颜色、CSS、错误页面等。请添加有效许可证以进行配置"
	],
	[
		"Whitelabeling is not available in Cloud",
		"Cloud 中不支持白标功能"
	],
	[
		"Whitelabeling settings reset to defaults",
		"白标设置已重置为默认值"
	],
	[
		"Whitelabeling settings updated",
		"白标设置已更新"
	],
	[
		"Wildcard Domain",
		"通配符域名"
	],
	[
		"Will be mounted as: ../files",
		"将挂载为：../files"
	],
	[
		"Window (nanoseconds)",
		"时间窗口（纳秒）"
	],
	[
		"with no running tasks",
		"个服务没有正在运行的任务"
	],
	[
		"with your Dokploy URL (e.g. https:// your-domain.com).",
		"替换为你的 Dokploy URL（例如 https://your-domain.com）"
	],
	[
		"Worker",
		"工作节点"
	],
	[
		"Workspace Name (optional)",
		"工作区名称（可选）"
	],
	[
		"Workspace Name (Optional)",
		"工作区名称（可选）"
	],
	[
		"Write",
		"写入"
	],
	[
		"Write (MB)",
		"写入（MB）"
	],
	[
		"Yes",
		"是"
	],
	[
		"Yes, rebuild database",
		"是，重建数据库"
	],
	[
		"You are free to use whatever provider, but we recommend to use one of the above, to avoid issues.",
		"您可以自由选择任何提供商，但为避免出现问题，我们建议使用上述提供商之一"
	],
	[
		"You are not a member of this organization",
		"你不是此组织的成员"
	],
	[
		"You are not allowed to access this certificate",
		"您无权访问此证书"
	],
	[
		"You are not allowed to access this destination",
		"你无权访问此存储目标"
	],
	[
		"You are not allowed to access this environment",
		"您无权访问此环境"
	],
	[
		"You are not allowed to access this registry",
		"您无权访问此镜像仓库"
	],
	[
		"You are not allowed to access this SSH key",
		"您无权访问此 SSH 密钥"
	],
	[
		"You are not allowed to assign permissions",
		"你无权分配权限"
	],
	[
		"You are not allowed to delete this certificate",
		"您无权删除此证书"
	],
	[
		"You are not allowed to delete this destination",
		"你无权删除此存储目标"
	],
	[
		"You are not allowed to delete this Git provider",
		"您无权删除此 Git 提供商"
	],
	[
		"You are not allowed to delete this registry",
		"您无权删除此镜像仓库"
	],
	[
		"You are not allowed to delete this SSH key",
		"您无权删除此 SSH 密钥"
	],
	[
		"You are not allowed to duplicate this environment",
		"您无权复制此环境"
	],
	[
		"You are not allowed to remove this invitation",
		"你无权删除此邀请"
	],
	[
		"You are not allowed to test this registry",
		"您无权测试此镜像仓库"
	],
	[
		"You are not allowed to update this certificate",
		"您无权更新此证书"
	],
	[
		"You are not allowed to update this destination",
		"你无权更新此存储目标"
	],
	[
		"You are not allowed to update this environment",
		"您无权更新此环境"
	],
	[
		"You are not allowed to update this member's role",
		"你无权更新此成员的角色"
	],
	[
		"You are not allowed to update this registry",
		"您无权更新此镜像仓库"
	],
	[
		"You are not allowed to update this SSH key",
		"您无权更新此 SSH 密钥"
	],
	[
		"You are not authorized to access this application",
		"你无权访问此应用"
	],
	[
		"You are not authorized to access this build server",
		"你无权访问此构建服务器"
	],
	[
		"You are not authorized to access this compose",
		"你无权访问此 Compose"
	],
	[
		"You are not authorized to access this Libsql",
		"你无权访问此 LibSQL 数据库"
	],
	[
		"You are not authorized to access this LibSQL",
		"你无权访问此 LibSQL 数据库"
	],
	[
		"You are not authorized to access this Mariadb",
		"你无权访问此 MariaDB 数据库"
	],
	[
		"You are not authorized to access this MariaDB",
		"你无权访问此 MariaDB 数据库"
	],
	[
		"You are not authorized to access this mongo",
		"你无权访问此 MongoDB 数据库"
	],
	[
		"You are not authorized to access this MongoDB",
		"你无权访问此 MongoDB 数据库"
	],
	[
		"You are not authorized to access this MySQL",
		"你无权访问此 MySQL 数据库"
	],
	[
		"You are not authorized to access this notification",
		"你无权访问此通知"
	],
	[
		"You are not authorized to access this Postgres",
		"你无权访问此 Postgres 数据库"
	],
	[
		"You are not authorized to access this project",
		"你无权访问此项目"
	],
	[
		"You are not authorized to access this Redis",
		"你无权访问此 Redis"
	],
	[
		"You are not authorized to access this server",
		"您无权访问此服务器"
	],
	[
		"You are not authorized to access this service or it does not exist",
		"您无权访问此服务，或该服务不存在"
	],
	[
		"You are not authorized to access this user",
		"你无权访问此用户"
	],
	[
		"You are not authorized to activate a license key",
		"您无权激活许可证密钥"
	],
	[
		"You are not authorized to deactivate a license key",
		"您无权停用许可证密钥"
	],
	[
		"You are not authorized to delete this API key",
		"你无权删除此 API 密钥"
	],
	[
		"You are not authorized to delete this application",
		"你无权删除此应用"
	],
	[
		"You are not authorized to delete this compose",
		"你无权删除此 Compose"
	],
	[
		"You are not authorized to delete this Libsql",
		"你无权删除此 LibSQL 数据库"
	],
	[
		"You are not authorized to delete this Mariadb",
		"你无权删除此 MariaDB 数据库"
	],
	[
		"You are not authorized to delete this mongo",
		"你无权删除此 MongoDB 数据库"
	],
	[
		"You are not authorized to delete this MySQL",
		"你无权删除此 MySQL 数据库"
	],
	[
		"You are not authorized to delete this notification",
		"你无权删除此通知"
	],
	[
		"You are not authorized to delete this Postgres",
		"你无权删除此 Postgres 数据库"
	],
	[
		"You are not authorized to delete this project",
		"你无权删除此项目"
	],
	[
		"You are not authorized to delete this Redis",
		"你无权删除此 Redis"
	],
	[
		"You are not authorized to delete this server",
		"你无权删除此服务器"
	],
	[
		"You are not authorized to get enterprise settings",
		"您无权获取企业版设置"
	],
	[
		"You are not authorized to setup this server",
		"你无权设置此服务器"
	],
	[
		"You are not authorized to update enterprise settings",
		"您无权更新企业版设置"
	],
	[
		"You are not authorized to update this notification",
		"你无权更新此通知"
	],
	[
		"You are not authorized to update this project",
		"你无权更新此项目"
	],
	[
		"You are not authorized to update this server",
		"你无权更新此服务器"
	],
	[
		"You are not authorized to validate a license key",
		"您无权验证许可证密钥"
	],
	[
		"You are not authorized to validate this server",
		"你无权验证此服务器"
	],
	[
		"You are using the latest version",
		"当前已是最新版本"
	],
	[
		"You can add environment variables to your resource.",
		"您可以向资源添加环境变量"
	],
	[
		"You can connect as root or as a non-root user with passwordless sudo access. If using a non-root user, ensure passwordless sudo is configured.",
		"您可以使用 root 用户连接，也可以使用具有免密码 sudo 权限的非 root 用户连接。如果使用非 root 用户，请确保已配置免密码 sudo"
	],
	[
		"You can not delete this server because it has active services.",
		"无法删除此服务器，因为它存在活动服务"
	],
	[
		"You can only delete your own Git providers",
		"您只能删除自己的 Git 提供商"
	],
	[
		"You can only revoke your own sessions",
		"你只能撤销自己的会话"
	],
	[
		"You cannot change your own role",
		"你不能更改自己的角色"
	],
	[
		"You cannot create a environment with the name 'production'",
		"不能创建名为“production”的环境"
	],
	[
		"You cannot create more servers",
		"不能再创建更多服务器"
	],
	[
		"You cannot create more servers,",
		"您无法创建更多服务器，"
	],
	[
		"You cannot delete the default environment",
		"不能删除默认环境"
	],
	[
		"You cannot delete the organization owner",
		"不能删除组织所有者"
	],
	[
		"You cannot rename the default environment",
		"不能重命名默认环境"
	],
	[
		"You cannot, deploy this application because the server is inactive, please upgrade your plan to add more servers.",
		"无法部署此应用，因为服务器未激活。请升级套餐以添加更多服务器"
	],
	[
		"You do not have permission to view deployments.",
		"你没有查看部署的权限"
	],
	[
		"You don't have access to backups or volume backups",
		"您无权访问备份或卷备份"
	],
	[
		"You don't have access to this deployment.",
		"你无权访问此部署"
	],
	[
		"You don't have access to this destination.",
		"您无权访问此存储目标"
	],
	[
		"You don't have access to this project",
		"您无权访问此项目"
	],
	[
		"You don't have access to this schedule.",
		"您无权访问此定时任务"
	],
	[
		"You don't have access to this server.",
		"您无权访问此服务器"
	],
	[
		"You don't have any AI configurations",
		"你还没有任何 AI 配置"
	],
	[
		"You don't have any certificates created",
		"你尚未创建任何证书"
	],
	[
		"You don't have any DNS providers configured",
		"尚未配置任何 DNS 提供商"
	],
	[
		"You don't have any registry configurations",
		"你尚未配置任何镜像仓库"
	],
	[
		"You don't have any secrets providers configured",
		"尚未配置任何密钥提供商"
	],
	[
		"You don't have any SSH keys",
		"暂无 SSH 密钥"
	],
	[
		"You have",
		"你有"
	],
	[
		"You have access to this project but no environments are available",
		"你有权访问此项目，但没有可用的环境"
	],
	[
		"You have active services associated with this server, please delete them first.",
		"此服务器关联了活动服务，请先将其删除"
	],
	[
		"You have active services, please delete them first",
		"存在运行中的服务，请先将其删除"
	],
	[
		"You have reached the maximum number of servers you can create, please upgrade your plan to add more servers.",
		"你已达到可创建的服务器数量上限，请升级套餐以添加更多服务器"
	],
	[
		"You have two options to add SSH Keys to your server:",
		"您可以通过以下两种方式将 SSH 密钥添加到服务器："
	],
	[
		"You may need to purchase or rent a Virtual Private Server (VPS) to proceed. We recommend using one of these heavily tested providers:",
		"您可能需要购买或租用虚拟专用服务器（VPS）才能继续。我们推荐以下经过充分测试的提供商："
	],
	[
		"You must maintain at least one organization where you are the owner",
		"你必须至少保留一个由你担任所有者的组织"
	],
	[
		"You need to add at least one registry to use build servers. Please go to",
		"你需要至少添加一个镜像仓库才能使用构建服务器。请前往"
	],
	[
		"You need to set an IP address in your",
		"您需要在"
	],
	[
		"You need to use a server to create a compose",
		"需要使用服务器才能创建 Compose"
	],
	[
		"You need to use a server to create a Libsql",
		"你需要使用服务器来创建 LibSQL 数据库"
	],
	[
		"You need to use a server to create a Mariadb",
		"你需要使用服务器来创建 MariaDB 数据库"
	],
	[
		"You need to use a server to create a mongo",
		"你需要使用服务器来创建 MongoDB 数据库"
	],
	[
		"You need to use a server to create a MySQL",
		"你需要使用服务器来创建 MySQL 数据库"
	],
	[
		"You need to use a server to create a Postgres",
		"你需要使用服务器来创建 Postgres 数据库"
	],
	[
		"You need to use a server to create a Redis",
		"需要使用服务器才能创建 Redis"
	],
	[
		"You need to use a server to create an application",
		"你需要使用服务器来创建应用"
	],
	[
		"You will also need to restart Traefik to apply the changes",
		"你还需要重新启动 Traefik 才能应用更改"
	],
	[
		"You will need to purchase or rent a Virtual Private Server (VPS) to proceed, we recommend to use one of these providers since has been heavily tested.",
		"你需要购买或租用虚拟专用服务器（VPS）才能继续。建议使用以下经过充分测试的提供商"
	],
	[
		"You will no longer be able to sign in with it. This action cannot be undone.",
		"您将无法再使用它登录。此操作无法撤销"
	],
	[
		"You're All Set!",
		"一切准备就绪！"
	],
	[
		"You’re on the legacy plan. Switch to Hobby or Startup (same benefits). You can also choose annual billing (20% off). Stripe will prorate the change.",
		"你正在使用旧版套餐。可切换到 Hobby 或 Startup（权益相同），也可选择按年计费（优惠 20%）。Stripe 将按比例计算变更费用"
	],
	[
		"Your API key for authentication",
		"用于身份验证的 API 密钥"
	],
	[
		"Your Bitbucket email",
		"你的 Bitbucket 邮箱"
	],
	[
		"Your Bitbucket email address",
		"你的 Bitbucket 邮箱地址"
	],
	[
		"Your Bitbucket Provider, eg: my-personal-account",
		"Bitbucket 提供商名称，例如：my-personal-account"
	],
	[
		"Your Bitbucket username",
		"你的 Bitbucket 用户名"
	],
	[
		"Your current plan:",
		"当前套餐："
	],
	[
		"Your email is not verified. We've sent a new verification link to your email.",
		"您的邮箱尚未验证。我们已向您的邮箱发送新的验证链接"
	],
	[
		"Your Gitea provider has been authorized.",
		"你的 Gitea 提供商已获授权"
	],
	[
		"Your invoices will appear here once you have a subscription",
		"订阅后，你的账单将显示在此处"
	],
	[
		"Your organization is on a managed Enterprise plan. Billing is handled separately — contact your account manager for any changes.",
		"你的组织正在使用托管式 Enterprise 套餐。账单将单独处理，如需更改，请联系你的客户经理"
	],
	[
		"Your server IP",
		"您的服务器 IP"
	],
	[
		"Your server is up to date with all the latest features and security improvements.",
		"服务器已是最新版本，包含所有最新功能和安全改进"
	],
	[
		"Zip file",
		"Zip 文件"
	],
	[
		"Zones this provider's API token can manage. Click a zone to see and manage its records.",
		"此提供商的 API 令牌可管理的区域。点击区域即可查看和管理其记录"
	]
]);

	EXACT_TRANSLATIONS.set("1073741824 (1GB in bytes)", "1073741824（1GB 对应的字节数）");
	EXACT_TRANSLATIONS.set("268435456 (256MB in bytes)", "268435456（256MB 对应的字节数）");
	EXACT_TRANSLATIONS.set("Backs up the database every day at midnight", "每天午夜备份数据库");
	EXACT_TRANSLATIONS.set("Used on my personal Hetzner VPS", "用于我的个人 Hetzner VPS");
	EXACT_TRANSLATIONS.set("e.g. okta or my-idp", "例如 okta 或 my-idp");
	EXACT_TRANSLATIONS.set("e.g. okta-saml or azure-saml", "例如 okta-saml 或 azure-saml");
	EXACT_TRANSLATIONS.set("no activity yet", "暂无活动");
	EXACT_TRANSLATIONS.set("no prior data", "暂无历史数据");
	EXACT_TRANSLATIONS.set("Documentation", "文档");
	EXACT_TRANSLATIONS.set("Support", "支持");
	EXACT_TRANSLATIONS.set("Organizations", "组织");
	EXACT_TRANSLATIONS.set("reclaimable", "可回收");


	const DYNAMIC_TEMPLATES = [
	[
		"Error ${}: ${}. Please verify that the application \"${}\" is running and this service is included in the monitoring configuration.",
		"错误 ${}：${}。请确认应用“${}”正在运行，并且此服务已包含在监控配置中"
	],
	[
		"Port 8080 is already in use${}. Please stop the conflicting service or use a different port for the Traefik dashboard.",
		"端口 8080 已被占用${}。请停止冲突的服务，或为 Traefik 仪表盘使用其他端口"
	],
	[
		"Error ${}: ${}. Ensure the container is running and this service is included in the monitoring configuration.",
		"错误 ${}：${}。请确保容器正在运行，并且此服务已包含在监控配置中"
	],
	[
		"${} Compose service(s) on this server aren't included — reservations aren't tracked per-service for Compose.",
		"此服务器上的 ${} 个 Compose 服务未计入——Compose 不支持按服务跟踪资源预留"
	],
	[
		"Are you sure you want to deploy ${} service${}? This will redeploy/restart the selected services.",
		"确定要部署 ${} 个服务${}吗？这将重新部署或重启所选服务"
	],
	[
		"Cannot delete role \"${}\": ${} member(s) are currently assigned to it. Reassign them first.",
		"无法删除角色“${}”：当前有 ${} 名成员被分配了此角色。请先重新分配这些成员"
	],
	[
		"Delete the ${} record \"${}\"? This removes it from the DNS provider, not just from Dokploy.",
		"确定删除 ${} 记录“${}”吗？这会从 DNS 提供商中将其删除，而不只是从 Dokploy 中删除"
	],
	[
		"Application Image Name (${}) doesn't match request event payload Image Name (${}).",
		"应用镜像名称（${}）与请求事件载荷中的镜像名称（${}）不匹配"
	],
	[
		"Application Image Tag (${}) doesn't match request event payload Image Tag (${}).",
		"应用镜像标签（${}）与请求事件载荷中的镜像标签（${}）不匹配"
	],
	[
		"Resource \"${}\" is managed internally and cannot be assigned to custom roles",
		"资源“${}”由系统内部管理，无法分配给自定义角色"
	],
	[
		"You've reached your plan's limit of ${} ${}. Upgrade your plan to add more.",
		"您已达到当前套餐的 ${} ${} 上限。请升级套餐以添加更多"
	],
	[
		"No monitoring data available for \"${}\". This could be because:",
		"“${}”暂无监控数据。可能的原因如下："
	],
	[
		"Mode: ${} (Aggressive mode recommended for better protection)",
		"模式：${}（建议使用激进模式以获得更好的防护）"
	],
	[
		"Invalid action \"${}\" for resource \"${}\". Valid actions: ${}",
		"操作“${}”不适用于资源“${}”。有效操作：${}"
	],
	[
		"Domain ${} is already registered for another provider",
		"域名 ${} 已注册到其他提供商"
	],
	[
		"Default: ${} (Should be set to 'deny' for security)",
		"默认：${}（为确保安全，应设为“deny”）"
	],
	[
		"${} — ${} active / ${} total — Reclaimable: ${}",
		"${} — ${} 个活跃 / 共 ${} 个 — 可回收：${}"
	],
	[
		"Browse and edit files inside the \"${}\" volume",
		"浏览和编辑“${}”卷中的文件"
	],
	[
		"Are you sure you want to start ${} services?",
		"确定要启动 ${} 个服务吗？"
	],
	[
		"Are you sure you want to stop ${} services?",
		"确定要停止 ${} 个服务吗？"
	],
	[
		"Failed to update log cleanup schedule: ${}",
		"更新日志清理定时任务失败：${}"
	],
	[
		"Error bulk assigning tags to project: ${}",
		"向项目批量分配标签时出错：${}"
	],
	[
		"${} network(s) no longer exist in Docker",
		"有 ${} 个网络已不存在于 Docker 中"
	],
	[
		"An error occurred deploying ${} template",
		"部署 ${} 模板时出错"
	],
	[
		"Port ${} (${}) is already in use by ${}",
		"端口 ${}（${}）已被 ${} 占用"
	],
	[
		"Error duplicating the environment: ${}",
		"复制环境时出错：${}"
	],
	[
		"${} service${} queued for deployment",
		"${} 个服务${}已加入部署队列"
	],
	[
		"Error removing tag from project: ${}",
		"从项目移除标签时出错：${}"
	],
	[
		"Failed to disconnect repository: ${}",
		"断开仓库连接失败：${}"
	],
	[
		"This will permanently delete ${}${}.",
		"此操作将永久删除 ${}${}"
	],
	[
		"Error assigning tag to project: ${}",
		"向项目分配标签时出错：${}"
	],
	[
		"Error creating the environment: ${}",
		"创建环境时出错：${}"
	],
	[
		"Error deleting the environment: ${}",
		"删除环境时出错：${}"
	],
	[
		"Error testing the notification: ${}",
		"测试通知时出错：${}"
	],
	[
		"Error updating the environment: ${}",
		"更新环境时出错：${}"
	],
	[
		"Deployed ${} apps based on tag ${}",
		"已部署 ${} 个应用，依据标签 ${}"
	],
	[
		"Error duplicating the project: ${}",
		"复制项目时出错：${}"
	],
	[
		"No running container found for ${}",
		"未找到 ${} 的运行中容器"
	],
	[
		"${} services deleted successfully",
		"已成功删除 ${} 个服务"
	],
	[
		"${} services started successfully",
		"已成功启动 ${} 个服务"
	],
	[
		"${} services stopped successfully",
		"已成功停止 ${} 个服务"
	],
	[
		"${} template created successfully",
		"${} 模板创建成功"
	],
	[
		"Failed to create environment: ${}",
		"创建环境失败：${}"
	],
	[
		"Failed to update environment: ${}",
		"更新环境失败：${}"
	],
	[
		"Network \"${}\" recreated in Docker",
		"已在 Docker 中重新创建网络“${}”"
	],
	[
		"Port ${} is already in use by ${}",
		"端口 ${} 已被 ${} 占用"
	],
	[
		"Error deploying service ${}: ${}",
		"部署服务 ${} 时出错：${}"
	],
	[
		"Error fetching environments: ${}",
		"获取环境时出错：${}"
	],
	[
		"${} apps · ${} compose · ${} db",
		"${} 个应用 · ${} 个 Compose · ${} 个数据库"
	],
	[
		"${} service${} failed to deploy",
		"${} 个服务${}部署失败"
	],
	[
		"${} services moved successfully",
		"已成功移动 ${} 个服务"
	],
	[
		"${} Try manually: rclone ls ${}",
		"${} 请尝试手动运行：rclone ls ${}"
	],
	[
		"Error creating the project: ${}",
		"创建项目时出错：${}"
	],
	[
		"Error deleting service ${}: ${}",
		"删除服务 ${} 时出错：${}"
	],
	[
		"Error testing the provider: ${}",
		"测试提供商时出错：${}"
	],
	[
		"Server ${} deleted successfully",
		"服务器 ${} 已成功删除"
	],
	[
		"Error processing template: ${}",
		"处理模板时出错：${}"
	],
	[
		"Volume backup ${} successfully",
		"卷备份${}成功"
	],
	[
		"Error importing template: ${}",
		"导入模板时出错：${}"
	],
	[
		"Error moving service ${}: ${}",
		"移动服务 ${} 时出错：${}"
	],
	[
		"Organization ${} successfully",
		"组织${}成功"
	],
	[
		"Project name must match \"${}\"",
		"项目名称必须与“${}”一致"
	],
	[
		"Error configuring Gitea: ${}",
		"配置 Gitea 时出错：${}"
	],
	[
		"Failed to ${} container: ${}",
		"容器操作失败（${}）：${}"
	],
	[
		"Used: ${} GB / Limit: ${} GB",
		"已使用：${} GB / 上限：${} GB"
	],
	[
		"Custom role \"${}\" not found",
		"未找到自定义角色“${}”"
	],
	[
		"Failed to fetch models: ${}",
		"获取模型失败：${}"
	],
	[
		"Container ${} successfully",
		"容器操作成功（${}）"
	],
	[
		"Error starting service ${}",
		"启动服务 ${} 时出错"
	],
	[
		"Error stopping service ${}",
		"停止服务 ${} 时出错"
	],
	[
		"Failed to ${} organization",
		"组织${}失败"
	],
	[
		"Removed stale record \"${}\"",
		"已移除失效记录“${}”"
	],
	[
		"You are now viewing as ${}",
		"你当前正以 ${} 的身份查看"
	],
	[
		"Error ${} the Destination",
		"${}存储目标时出错"
	],
	[
		"Role \"${}\" already exists",
		"角色“${}”已存在"
	],
	[
		"Schedule ${} successfully",
		"定时任务${}成功"
	],
	[
		"${} deleted successfully",
		"已成功删除 ${}"
	],
	[
		"Error fetching tags: ${}",
		"获取标签时出错：${}"
	],
	[
		"Restarting container ${}",
		"正在重启容器 ${}"
	],
	[
		"Error creating tag: ${}",
		"创建标签时出错：${}"
	],
	[
		"Error deleting ${}: ${}",
		"删除 ${} 时出错：${}"
	],
	[
		"Error deleting tag: ${}",
		"删除标签时出错：${}"
	],
	[
		"Error fetching tag: ${}",
		"获取标签时出错：${}"
	],
	[
		"Error updating tag: ${}",
		"更新标签时出错：${}"
	],
	[
		"Imported ${} network(s)",
		"已导入 ${} 个网络"
	],
	[
		"Connection failed: ${}",
		"连接失败：${}"
	],
	[
		"Could not import \"${}\"",
		"无法导入“${}”"
	],
	[
		"Read: ${} / Write: ${}",
		"读取：${} / 写入：${}"
	],
	[
		"Used: ${} / Limit: ${}",
		"已使用：${} / 上限：${}"
	],
	[
		"Unknown resource: ${}",
		"未知资源：${}"
	],
	[
		"${} ${} successfully",
		"${} ${}成功"
	],
	[
		"Analysis failed: ${}",
		"分析失败：${}"
	],
	[
		"Enabled (${} GPU${})",
		"已启用（${} 个 GPU${}）"
	],
	[
		"Error updating \"${}\"",
		"更新“${}”时出错"
	],
	[
		"Role \"${}\" not found",
		"未找到角色“${}”"
	],
	[
		"Error ${} ${}: ${}",
		"执行 ${} ${} 时出错：${}"
	],
	[
		"Error ${} a backup",
		"备份操作出错（${}）"
	],
	[
		"In: ${} / Out: ${}",
		"流入：${} / 流出：${}"
	],
	[
		"Role \"${}\" created",
		"角色“${}”已创建"
	],
	[
		"Role \"${}\" deleted",
		"角色“${}”已删除"
	],
	[
		"Role \"${}\" updated",
		"角色“${}”已更新"
	],
	[
		"Deployed ${} apps",
		"已部署 ${} 个应用"
	],
	[
		"Selected ${} tags",
		"已选择 ${} 个标签"
	],
	[
		"Welcome back, ${}",
		"欢迎回来，${}"
	],
	[
		"Available (v${})",
		"可用（v${}）"
	],
	[
		"Installed (v${})",
		"已安装（v${}）"
	],
	[
		"New file in ${}/",
		"在 ${}/ 中新建文件"
	],
	[
		"Confirm new ${}",
		"确认新的${}"
	],
	[
		"Deleting ${}...",
		"正在删除 ${}..."
	],
	[
		"Destination ${}",
		"存储目标${}"
	],
	[
		"Installed: ${}",
		"已安装：${}"
	],
	[
		"Enter new ${}",
		"输入新的${}"
	],
	[
		"${} selected",
		"已选择 ${} 项"
	],
	[
		"$${} per ${}",
		"$${} / ${}"
	],
	[
		"Editing: ${}",
		"正在编辑：${}"
	],
	[
		"Message: ${}",
		"消息：${}"
	],
	[
		"Requests ${}",
		"请求日志状态：${}"
	],
	[
		"Default ${}",
		"默认 ${}"
	],
	[
		"Delete ${}?",
		"删除 ${}？"
	],
	[
		"(min. ${})",
		"（最少 ${}）"
	],
	[
		"${} copied",
		"${}已复制"
	],
	[
		"Backup ${}",
		"备份${}"
	],
	[
		"Behind ${}",
		"位于 ${} 后方"
	],
	[
		"Error: ${}",
		"错误：${}"
	],
	[
		"${} users",
		"${} 个用户"
	],
	[
		"last ${}",
		"最后 ${}"
	]
];
	DYNAMIC_TEMPLATES.push(
		["Force logout for ${} ${} (${})?", "确定要强制让 ${} ${}（${}）退出登录吗？"],
	);

	const TOKEN = "$" + "{}";
	const SUPPORTED_ROUTE = /^\/(?:$|dashboard(?:\/|$)|register(?:\/|$)|invitation(?:\/|$)|reset-password(?:\/|$)|send-reset-password(?:\/|$)|accept-invitation(?:\/|$)|swagger(?:\/|$))/;
	const ATTRIBUTE_NAMES = ["placeholder", "title", "aria-label", "alt"];
	const SKIP_SUBTREE_SELECTOR = [
		"script",
		"style",
		"noscript",
		"template",
		"code",
		"pre",
		"kbd",
		"samp",
		"math",
		".xterm",
		".cm-editor",
		".cm-content",
		"[data-language]",
		"[contenteditable='true']",
	].join(",");
	const SKIP_TEXT_SELECTOR = SKIP_SUBTREE_SELECTOR + ",textarea";
	const STATUS_CONTEXT_SELECTOR = [
		"[data-slot='badge']",
		"[data-slot='select-item']",
		"[data-slot='tooltip-content']",
		"[data-slot='table-cell']",
		"td",
		"[class*='capitalize']",
	].join(",");

	const MONTHS = new Map([
		["january", 1], ["jan", 1],
		["february", 2], ["feb", 2],
		["march", 3], ["mar", 3],
		["april", 4], ["apr", 4],
		["may", 5],
		["june", 6], ["jun", 6],
		["july", 7], ["jul", 7],
		["august", 8], ["aug", 8],
		["september", 9], ["sep", 9], ["sept", 9],
		["october", 10], ["oct", 10],
		["november", 11], ["nov", 11],
		["december", 12], ["dec", 12],
	]);
	const CALENDAR_TRANSLATIONS = new Map([
		["January", "一月"], ["Jan", "1月"],
		["February", "二月"], ["Feb", "2月"],
		["March", "三月"], ["Mar", "3月"],
		["April", "四月"], ["Apr", "4月"],
		["May", "五月"],
		["June", "六月"], ["Jun", "6月"],
		["July", "七月"], ["Jul", "7月"],
		["August", "八月"], ["Aug", "8月"],
		["September", "九月"], ["Sep", "9月"], ["Sept", "9月"],
		["October", "十月"], ["Oct", "10月"],
		["November", "十一月"], ["Nov", "11月"],
		["December", "十二月"], ["Dec", "12月"],
		["Sunday", "星期日"], ["Sun", "周日"], ["Su", "日"],
		["Monday", "星期一"], ["Mon", "周一"], ["Mo", "一"],
		["Tuesday", "星期二"], ["Tue", "周二"], ["Tu", "二"],
		["Wednesday", "星期三"], ["Wed", "周三"], ["We", "三"],
		["Thursday", "星期四"], ["Thu", "周四"], ["Th", "四"],
		["Friday", "星期五"], ["Fri", "周五"], ["Fr", "五"],
		["Saturday", "星期六"], ["Sat", "周六"], ["Sa", "六"],
	]);
	const STATUS_TRANSLATIONS = new Map([
		["active", "活跃"],
		["available", "可用"],
		["cancelled", "已取消"],
		["completed", "已完成"],
		["created", "已创建"],
		["dead", "已终止"],
		["disabled", "已禁用"],
		["done", "完成"],
		["down", "离线"],
		["drain", "排空"],
		["enabled", "已启用"],
		["error", "错误"],
		["errored", "错误"],
		["exited", "已退出"],
		["failed", "失败"],
		["healthy", "健康"],
		["idle", "空闲"],
		["inactive", "未启用"],
		["leader", "主节点"],
		["offline", "离线"],
		["online", "在线"],
		["paused", "已暂停"],
		["pending", "等待中"],
		["queued", "排队中"],
		["reachable", "可达"],
		["ready", "就绪"],
		["removing", "移除中"],
		["restarting", "重启中"],
		["running", "运行中"],
		["starting", "启动中"],
		["stopped", "已停止"],
		["success", "成功"],
		["unavailable", "不可用"],
		["unhealthy", "不健康"],
		["unknown", "未知"],
	]);
	const RELATIVE_UNITS = new Map([
		["second", "秒"],
		["minute", "分钟"],
		["hour", "小时"],
		["day", "天"],
		["week", "周"],
		["month", "个月"],
		["year", "年"],
	]);

	function compact(value) {
		return value.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
	}

	function escapeRegExp(value) {
		return value.replace(/[.*+?^$()|[\]\\{}]/g, "\\$&");
	}

	function compileTemplate([source, target]) {
		const sourceParts = source.split(TOKEN);
		const targetParts = target.split(TOKEN);
		const marker = sourceParts.reduce(
			(longest, part) => (part.length > longest.length ? part : longest),
			"",
		);
		const token = (marker.match(/[A-Za-z][A-Za-z0-9_-]*/g) || [])
			.reduce(
				(longest, item) => (item.length > longest.length ? item : longest),
				"",
			)
			.toLowerCase();
		const expression = "^" + sourceParts.map(escapeRegExp).join("([\\s\\S]*?)") + "$";
		return {
			expression: new RegExp(expression, "u"),
			marker,
			targetParts,
			token,
		};
	}

	const DYNAMIC_RULES = DYNAMIC_TEMPLATES.map(compileTemplate);
	const DYNAMIC_TOKENS = new Set(DYNAMIC_RULES.map((rule) => rule.token));

	function translateRelativeTime(value) {
		const match = value.match(/^(in )?(less than |about |over |almost )?(half a|an?|\d+) (second|minute|hour|day|week|month|year)s?( ago)?$/i);
		if (!match) return null;
		const prefix = {
			"less than ": "不到",
			"about ": "约",
			"over ": "超过",
			"almost ": "将近",
		}[match[2]?.toLowerCase()] || "";
		const quantity = match[3].toLowerCase() === "half a"
			? "半"
			: /^(?:a|an)$/i.test(match[3])
				? "1"
				: match[3];
		const unit = RELATIVE_UNITS.get(match[4].toLowerCase());
		const distance = prefix + quantity + unit;
		if (match[1]) return distance + "后";
		if (match[5]) return distance + "前";
		return distance;
	}

	function translateEnglishDate(value) {
		let match = value.match(/^([A-Za-z]+)\s+(\d{1,2})\s*[–—-]\s*([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
		if (match) {
			const startMonth = MONTHS.get(match[1].toLowerCase());
			const endMonth = MONTHS.get(match[3].toLowerCase());
			if (startMonth && endMonth) return match[5] + "年" + startMonth + "月" + match[2] + "日–" + endMonth + "月" + match[4] + "日";
		}

		match = value.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})(?:,| at)\s*(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)$/i);
		if (match) {
			const month = MONTHS.get(match[1].toLowerCase());
			if (month) {
				const seconds = match[6] ? ":" + match[6] : "";
				const period = match[7].toUpperCase() === "AM" ? "上午" : "下午";
				return match[3] + "年" + month + "月" + match[2] + "日 " + period + match[4] + ":" + match[5] + seconds;
			}
		}

		match = value.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
		if (match) {
			const month = MONTHS.get(match[1].toLowerCase());
			if (month) return match[3] + "年" + month + "月" + match[2] + "日";
		}

		match = value.match(/^([A-Za-z]+)\s+(\d{1,2})$/);
		if (match) {
			const month = MONTHS.get(match[1].toLowerCase());
			if (month) return month + "月" + match[2] + "日";
		}

		match = value.match(/^([A-Za-z]+)\s+(\d{4})$/);
		if (match) {
			const month = MONTHS.get(match[1].toLowerCase());
			if (month) return match[2] + "年" + month + "月";
		}

		return null;
	}

	function isGeneratedCandidate(value) {
		const firstCode = value.charCodeAt(0);
		if (firstCode >= 48 && firstCode <= 57) return true;
		const lower = value.toLowerCase();
		if (
			lower.startsWith("in ") ||
			lower.startsWith("less than ") ||
			lower.startsWith("about ") ||
			lower.startsWith("over ") ||
			lower.startsWith("almost ") ||
			lower.startsWith("half a ") ||
			lower.startsWith("a ") ||
			lower.startsWith("an ")
		) {
			return true;
		}
		const space = lower.indexOf(" ");
		const firstWord = space === -1 ? lower : lower.slice(0, space);
		return MONTHS.has(firstWord);
	}

	function translateGenerated(value) {
		if (!isGeneratedCandidate(value)) return null;
		return translateRelativeTime(value) || translateEnglishDate(value);
	}

	function isCalendarContext(element) {
		return Boolean(element?.closest("[class*='group/calendar']"));
	}

	function isStatusContext(element) {
		if (!element) return false;
		if (element.closest(STATUS_CONTEXT_SELECTOR)) return true;
		const parentText = compact(element.parentElement?.textContent || "");
		return /(?:^|\s)(?:Status|Availability|状态|可用性)\s*[:：]/i.test(parentText);
	}

	function translateStatus(value, element) {
		const direct = STATUS_TRANSLATIONS.get(value.toLowerCase());
		if (direct) return direct;
		let match = value.match(/^Up(?:\s+(.+))?$/i);
		if (!match) match = value.match(/^Exited\s*\((\d+)\)(?:\s+(.+))?$/i);
		if (!match || !isStatusContext(element)) return null;
		if (/^Up/i.test(value)) {
			const duration = match[1] ? translateRelativeTime(match[1]) || match[1] : "";
			return duration ? "运行中（" + duration + "）" : "运行中";
		}
		const duration = match[2] ? translateRelativeTime(match[2]) || match[2] : "";
		return "已退出（代码 " + match[1] + (duration ? "，" + duration : "") + "）";
	}

	function getDynamicCandidateTokens(value) {
		const tokens = value.match(/[A-Za-z][A-Za-z0-9_-]*/g);
		if (!tokens) return null;
		let hasCandidate = false;
		for (const token of tokens) {
			if (DYNAMIC_TOKENS.has(token.toLowerCase())) {
				hasCandidate = true;
				break;
			}
		}
		if (!hasCandidate) return null;
		return new Set(tokens.map((token) => token.toLowerCase()));
	}

	function applyDynamicRule(value) {
		const tokenSet = getDynamicCandidateTokens(value);
		if (!tokenSet) return null;
		for (const rule of DYNAMIC_RULES) {
			if (!tokenSet.has(rule.token)) continue;
			if (rule.marker && !value.includes(rule.marker)) continue;
			const match = value.match(rule.expression);
			if (!match) continue;
			let translated = rule.targetParts[0];
			for (let index = 1; index < rule.targetParts.length; index += 1) {
				const captured = match[index] || "";
				translated += (translateGenerated(captured) || captured) + rule.targetParts[index];
			}
			return translated;
		}
		return null;
	}

	function translateResourceCount(value) {
		if (value === "environment" || value === "environments") return "个环境";
		if (value === "service" || value === "services") return "个服务";
		let match = value.match(/^(\d+)\s+environments?$/i);
		if (match) return `${match[1]} 个环境`;
		match = value.match(/^(\d+)\s+services?$/i);
		if (match) return `${match[1]} 个服务`;
		match = value.match(/^(.+?)\s+environment$/i);
		if (match) {
			const environmentNames = {
				production: "生产",
				staging: "预发布",
				development: "开发",
				testing: "测试",
				preview: "预览",
			};
			const translatedName =
				environmentNames[match[1].toLowerCase()] || match[1];
			return `${translatedName}${translatedName === match[1] ? " " : ""}环境`;
		}
		match = value.match(/^(.+?)\s+service$/i);
		if (match) return `${match[1]} 服务`;
		return null;
	}

	function translateValue(value, element) {
		const normalized = compact(value);
		if (!normalized) return null;
		const exact = EXACT_TRANSLATIONS.get(normalized);
		if (exact) return exact;
		const resourceCount = translateResourceCount(normalized);
		if (resourceCount) return resourceCount;
		const dynamic = applyDynamicRule(normalized);
		if (dynamic) return dynamic;
		const generated = translateGenerated(normalized);
		if (generated) return generated;
		const calendar = CALENDAR_TRANSLATIONS.get(normalized);
		if (calendar && isCalendarContext(element)) return calendar;
		return translateStatus(normalized, element);
	}

	function shouldTrackTextValue(value) {
		const normalized = compact(value);
		if (!normalized) return false;
		if (EXACT_TRANSLATIONS.has(normalized)) return true;
		if (translateResourceCount(normalized)) return true;
		if (getDynamicCandidateTokens(normalized)) return true;
		if (isGeneratedCandidate(normalized)) return true;
		if (CALENDAR_TRANSLATIONS.has(normalized)) return true;
		if (STATUS_TRANSLATIONS.has(normalized.toLowerCase())) return true;
		return /^Up(?:\s|$)|^Exited\s*\(/i.test(normalized);
	}


	function translateTitle(value) {
		const direct = translateValue(value, null);
		if (direct) return direct;
		return value
			.split(/(\s+\|\s+)/)
			.map((part) => part.includes("|") ? part : translateValue(part, null) || part)
			.join("");
	}

	let mutationObserverActive = false;
	let textObserver = null;
	const TRACKED_TEXT_NODES = new Set();
	let reconnectScheduled = false;


	function trackTextNode(node) {
		if (TRACKED_TEXT_NODES.has(node)) return;
		TRACKED_TEXT_NODES.add(node);
		textObserver?.observe(node, { characterData: true });
	}

	function reconnectTrackedTextObserver() {
		if (!textObserver) return;
		textObserver.disconnect();
		for (const node of TRACKED_TEXT_NODES) {
			if (node.isConnected) textObserver.observe(node, { characterData: true });
			else TRACKED_TEXT_NODES.delete(node);
		}
	}

	function untrackTextNode(node) {
		if (!TRACKED_TEXT_NODES.delete(node) || reconnectScheduled) return;
		reconnectScheduled = true;
		setTimeout(() => {
			reconnectScheduled = false;
			reconnectTrackedTextObserver();
		}, 0);
	}

	const SELF_MUTATION_COUNTS = new WeakMap();

	function markSelfMutation(node) {
		if (!mutationObserverActive) return;
		SELF_MUTATION_COUNTS.set(node, (SELF_MUTATION_COUNTS.get(node) || 0) + 1);
	}

	function consumeSelfMutation(node) {
		const count = SELF_MUTATION_COUNTS.get(node) || 0;
		if (!count) return false;
		if (count === 1) SELF_MUTATION_COUNTS.delete(node);
		else SELF_MUTATION_COUNTS.set(node, count - 1);
		return true;
	}

	function nearestSiblingText(node, direction) {
		let sibling = node[direction];
		while (sibling) {
			const text = compact(sibling.textContent || "");
			if (text) return text;
			sibling = sibling[direction];
		}
		return "";
	}

	function collapseChineseSeparator(node) {
		const previous = nearestSiblingText(node, "previousSibling");
		const next = nearestSiblingText(node, "nextSibling");
		if (
			node.nodeValue !== "" &&
			/[\u3400-\u9fff]$/u.test(previous) &&
			/^[\u3400-\u9fff]/u.test(next)
		) {
			markSelfMutation(node);
			node.nodeValue = "";
		}
	}

	function collapsePluralSuffix(node) {
		if (compact(node.nodeValue || "") !== "s") return false;
		const previous = nearestSiblingText(node, "previousSibling");
		if (!/(?:个服务|个环境)$/u.test(previous)) return false;
		trackTextNode(node);
		markSelfMutation(node);
		node.nodeValue = "";
		return true;
	}

	function trackAdjacentPluralSuffix(node) {
		const value = compact(node.nodeValue || "");
		if (!/(?:个服务|个环境)$/u.test(value)) return;
		let sibling = node.nextSibling;
		while (sibling) {
			if (sibling.nodeType === Node.COMMENT_NODE) {
				sibling = sibling.nextSibling;
				continue;
			}
			if (sibling.nodeType !== Node.TEXT_NODE) return;
			const suffix = compact(sibling.nodeValue || "");
			if (suffix === "" || suffix === "s") {
				trackTextNode(sibling);
				if (suffix === "s") collapsePluralSuffix(sibling);
				if (suffix === "s") return;
				sibling = sibling.nextSibling;
				continue;
			}
			return;
		}
	}

	function collapseAdjacentChineseSeparators(node) {
		for (const direction of ["previousSibling", "nextSibling"]) {
			let sibling = node[direction];
			while (sibling && !compact(sibling.textContent || "")) {
				if (sibling.nodeType === Node.TEXT_NODE) collapseChineseSeparator(sibling);
				sibling = sibling[direction];
			}
		}
	}

	function translateTextNode(node, checkContext = true) {
		const parent = node.parentElement;
		if (!parent || (checkContext && parent.closest(SKIP_TEXT_SELECTOR))) return;
		const original = node.nodeValue || "";
		if (collapsePluralSuffix(node)) return;
		if (!original.trim()) {
			collapseChineseSeparator(node);
			return;
		}
		const boundary = original.match(/^(\s*)([\s\S]*?)(\s*)$/u);
		if (!boundary) return;
		const translated = parent.tagName === "TITLE"
			? translateTitle(boundary[2])
			: translateValue(boundary[2], parent);
		if (!translated || compact(boundary[2]) === translated) {
			if (checkContext) untrackTextNode(node);
			return;
		}
		if (shouldTrackTextValue(boundary[2])) trackTextNode(node);
		else untrackTextNode(node);
		markSelfMutation(node);
		node.nodeValue = boundary[1] + translated + boundary[3];
		trackAdjacentPluralSuffix(node);
		collapseAdjacentChineseSeparators(node);
	}

	function translateElementAttributes(element, checkContext = true) {
		if (element.namespaceURI === "http://www.w3.org/2000/svg") return;
		if (!element.hasAttributes()) return;
		if (checkContext && element.closest(SKIP_SUBTREE_SELECTOR)) return;
		for (const attribute of ATTRIBUTE_NAMES) {
			if (!element.hasAttribute(attribute)) continue;
			const original = element.getAttribute(attribute) || "";
			const translated = translateValue(original, element);
			if (translated && compact(original) !== translated) {
				markSelfMutation(element);
				element.setAttribute(attribute, translated);
			}
		}
	}

	function translateSubtree(root) {
		if (!root) return;
		if (root.nodeType === Node.TEXT_NODE) {
			translateTextNode(root);
			return;
		}
		if (![Node.ELEMENT_NODE, Node.DOCUMENT_NODE, Node.DOCUMENT_FRAGMENT_NODE].includes(root.nodeType)) return;
		if (root.nodeType === Node.ELEMENT_NODE) {
			if (root.closest(SKIP_SUBTREE_SELECTOR)) return;
			translateElementAttributes(root, false);
		}

		const walker = document.createTreeWalker(
			root,
			NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
			{
				acceptNode(node) {
					if (node.nodeType === Node.ELEMENT_NODE) {
						if (node.matches(SKIP_SUBTREE_SELECTOR)) return NodeFilter.FILTER_REJECT;
						if (
							node.namespaceURI === "http://www.w3.org/2000/svg" &&
							!["text", "tspan", "title"].includes(node.localName)
						) {
							return NodeFilter.FILTER_SKIP;
						}
					}
					return NodeFilter.FILTER_ACCEPT;
				},
			},
		);
		let current = walker.nextNode();
		while (current) {
			if (current.nodeType === Node.TEXT_NODE) translateTextNode(current, false);
			else translateElementAttributes(current, false);
			current = walker.nextNode();
		}
	}

	function translateSubtreeIncrementally(root) {
		if (!root) return;
		if (root.nodeType === Node.TEXT_NODE) {
			translateTextNode(root);
			return;
		}
		if (![Node.ELEMENT_NODE, Node.DOCUMENT_NODE, Node.DOCUMENT_FRAGMENT_NODE].includes(root.nodeType)) return;
		if (root.nodeType === Node.ELEMENT_NODE) {
			if (root.closest(SKIP_SUBTREE_SELECTOR)) return;
			translateElementAttributes(root, false);
		}

		const walker = document.createTreeWalker(
			root,
			NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
			{
				acceptNode(node) {
					if (node.nodeType === Node.ELEMENT_NODE) {
						if (node.matches(SKIP_SUBTREE_SELECTOR)) return NodeFilter.FILTER_REJECT;
						if (
							node.namespaceURI === "http://www.w3.org/2000/svg" &&
							!["text", "tspan", "title"].includes(node.localName)
						) {
							return NodeFilter.FILTER_SKIP;
						}
					}
					return NodeFilter.FILTER_ACCEPT;
				},
			},
		);
		let current = walker.nextNode();
		const processFrame = () => {
			const deadline = performance.now() + 6;
			while (current && performance.now() < deadline) {
				if (current.nodeType === Node.TEXT_NODE) translateTextNode(current, false);
				else translateElementAttributes(current, false);
				current = walker.nextNode();
			}
			if (current) requestAnimationFrame(processFrame);
		};
		requestAnimationFrame(processFrame);
	}

	function shouldTranslateIncrementally(root) {
		if (
			root.nodeType === Node.DOCUMENT_NODE ||
			root.nodeType === Node.DOCUMENT_FRAGMENT_NODE
		) {
			return true;
		}
		if (root.nodeType !== Node.ELEMENT_NODE) return false;
		const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
		let count = 0;
		while (walker.nextNode()) {
			count += 1;
			if (count > 200) return true;
		}
		return false;
	}

	const pending = new Set();
	let flushScheduled = false;
	function enqueue(node) {
		if (!node) return;
		let ancestor = node.parentNode;
		while (ancestor) {
			if (pending.has(ancestor)) return;
			ancestor = ancestor.parentNode;
		}
		if (
			node.nodeType === Node.ELEMENT_NODE ||
			node.nodeType === Node.DOCUMENT_FRAGMENT_NODE
		) {
			for (const item of pending) {
				if (node.contains(item)) pending.delete(item);
			}
		}
		pending.add(node);
		if (flushScheduled) return;
		flushScheduled = true;
		queueMicrotask(() => {
			flushScheduled = false;
			const nodes = Array.from(pending);
			pending.clear();
			for (const item of nodes) {
				if (shouldTranslateIncrementally(item)) {
					translateSubtreeIncrementally(item);
				} else {
					translateSubtree(item);
				}
			}
		});
	}

	function hasDokployFingerprint() {
		return Boolean(
			document.querySelector("svg[viewBox='0 0 559 446'], img[alt='Organization Logo']") ||
			(location.pathname.startsWith("/dashboard") && document.querySelector("a[href='/dashboard/home']")),
		);
	}

	let started = false;
	let detector = null;
	function startTranslation() {
		if (started || !SUPPORTED_ROUTE.test(location.pathname) || !hasDokployFingerprint()) return;
		started = true;
		detector?.disconnect();
		document.documentElement.lang = "zh-CN";
		translateSubtreeIncrementally(document.documentElement);

		textObserver = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				if (!TRACKED_TEXT_NODES.has(mutation.target)) continue;
				if (consumeSelfMutation(mutation.target)) continue;
				enqueue(mutation.target);
			}
		});
		mutationObserverActive = true;
		reconnectTrackedTextObserver();

		const observer = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				if (
					mutation.type === "attributes" &&
					consumeSelfMutation(mutation.target)
				) {
					continue;
				}
				if (mutation.type === "attributes") {
					translateElementAttributes(mutation.target);
				}
				else for (const node of mutation.addedNodes) enqueue(node);
			}
		});
		observer.observe(document.documentElement, {
			subtree: true,
			childList: true,
			attributes: true,
			attributeFilter: ATTRIBUTE_NAMES,
		});
		setInterval(reconnectTrackedTextObserver, 30000);
	}

	if (!SUPPORTED_ROUTE.test(location.pathname)) return;

	function installDetector() {
		if (detector || started) return true;
		if (!document.documentElement) return false;
		detector = new MutationObserver(startTranslation);
		detector.observe(document.documentElement, { subtree: true, childList: true });
		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", startTranslation, { once: true });
		}
		startTranslation();
		setTimeout(() => detector?.disconnect(), 30000);
		return true;
	}

	function waitForDocumentElement() {
		if (!installDetector()) setTimeout(waitForDocumentElement, 10);
	}

	waitForDocumentElement();
})();
