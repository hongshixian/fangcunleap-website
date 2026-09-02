"use client"

import MarketingPage, { MPSection } from "@/components/legacy/MarketingPage";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";

// Bilingual content for the General privacy policy (source of truth:
// 飞书文档「0902 官网General privacy policy」, last updated 2026-09-02).
type L = { zh: string; en: string };
type Bullet = { b?: L; t: L };
type Block =
  | { kind: "p"; t: L }
  | { kind: "h3"; t: L }
  | { kind: "h4"; t: L }
  | { kind: "ul"; items: Bullet[] }
  | { kind: "ol"; items: L[] }
  | { kind: "table"; headers: L[]; rows: L[][] };

const INTRO: L[] = [
  {
    zh: "方寸跃迁（雄安）科技有限公司（以下简称“方寸跃迁”或“我们”）重视并保护您的个人信息。本政策说明您访问方寸跃迁官网、与我们联系，或者使用明确链接至本政策的产品与服务时，我们如何收集、使用、存储、委托处理、提供和保护您的个人信息，以及您如何行使相关权利。",
    en: "Fangcun Leap (Xiong'an) Technology Co., Ltd. (\"Fangcun Leap\" or \"we\") values and protects your personal information. This policy explains how we collect, use, store, process on a commissioned basis, provide, and protect your personal information when you visit the Fangcun Leap website, contact us, or use products and services expressly linked to this policy, and how you may exercise your related rights.",
  },
  {
    zh: "我们将依据《中华人民共和国个人信息保护法》《中华人民共和国网络安全法》《中华人民共和国数据安全法》《网络数据安全管理条例》等适用法律法规处理个人信息。",
    en: "We process personal information in accordance with applicable laws and regulations, including the Personal Information Protection Law of the People's Republic of China, the Cybersecurity Law of the People's Republic of China, the Data Security Law of the People's Republic of China, and the Regulations on the Administration of Network Data Security.",
  },
];

const SECTIONS: { title: L; blocks: Block[] }[] = [
  // 一、本政策的适用范围
  {
    title: { zh: "一、本政策的适用范围", en: "1. Scope of This Policy" },
    blocks: [
      {
        kind: "p",
        t: {
          zh: "除了提供独立隐私政策的特定产品或服务外，本隐私政策适用于引用或链接至本隐私政策的所有方寸跃迁在线页面、平台与服务。本隐私政策规定了当我们提供位于我们的网站以及所提供的应用程序的产品或服务时，您授权提供给我们或我们主动收集的个人信息，我们如何收集、使用、披露、处理和保护。",
          en: "Except for specific products or services that provide their own privacy policies, this privacy policy applies to all Fangcun Leap online pages, platforms, and services that reference or link to it. It describes how we collect, use, disclose, process, and protect the personal information that you authorize us to use or that we actively collect when you use the products or services offered on our website and in our applications.",
        },
      },
      {
        kind: "p",
        t: {
          zh: "若某款产品或服务有单独的隐私政策，则该单独隐私政策将被优先适用。该产品或服务的单独隐私政策未涵盖的部分，以本隐私政策内容为准。同时，取决于您所使用的操作系统、服务版本或所在位置等因素，特定产品或服务如何收集、处理您的个人信息可能有所不同。您应当参阅单独的隐私政策以获取详细信息。",
          en: "If a product or service has its own privacy policy, that separate policy takes precedence; matters it does not cover are governed by this privacy policy. In addition, depending on factors such as the operating system you use, the service version, or your location, how a specific product or service collects and processes your personal information may differ. Please refer to the separate privacy policy for details.",
        },
      },
    ],
  },

  // 二、我们收集哪些信息以及如何使用信息
  {
    title: { zh: "二、我们收集哪些信息以及如何使用信息", en: "2. Information We Collect and How We Use It" },
    blocks: [
      {
        kind: "p",
        t: {
          zh: "为了向您提供网站、产品和服务，我们会根据您实际选择的功能处理必要的个人信息。我们只会为具体、明确且合法的目的收集与使用信息，不会因为本政策列出了某类信息，就在所有场景中收集该类信息。如果某项信息并非实现相应功能所必需，您可以选择不提供；但这可能使我们无法完成您的请求或提供对应功能。",
          en: "To provide our website, products, and services, we process the personal information necessary for the features you actually choose. We collect and use information only for specific, explicit, and lawful purposes, and the fact that a category of information is listed in this policy does not mean we collect it in every scenario. If an item of information is not necessary for the corresponding feature, you may choose not to provide it; however, this may prevent us from fulfilling your request or providing that feature.",
        },
      },
      { kind: "h3", t: { zh: "1. 我们收集哪些信息", en: "1. Information we collect" } },
      { kind: "h4", t: { zh: "1.1 您主动提供给我们的信息", en: "1.1 Information you actively provide to us" } },
      {
        kind: "p",
        t: {
          zh: "根据您使用的功能或与我们互动的方式，您可能会主动提供以下信息：",
          en: "Depending on the features you use or how you interact with us, you may actively provide the following information:",
        },
      },
      {
        kind: "ul",
        items: [
          {
            b: { zh: "联系与商务信息。", en: "Contact and business information. " },
            t: {
              zh: "当您进行商务咨询、申请演示或与我们日常沟通时，您可能会提供姓名、工作邮箱、联系电话、所在单位、职务、咨询内容及往来信息。我们使用这些信息回复您的请求、安排演示、提供售前支持，或者建立和履行商务关系。",
              en: "When you make business inquiries, request a demo, or communicate with us, you may provide your name, work email, phone number, organization, title, and the content of your inquiries and correspondence. We use this information to respond to your requests, arrange demos, provide pre-sales support, and establish and perform business relationships.",
            },
          },
          {
            b: { zh: "账号及交易信息。", en: "Account and transaction information. " },
            t: {
              zh: "当您注册或使用在线服务时，您可能会提供邮箱、企业名称、账号标识和验证信息。当您购买付费服务时，您可能会提供订单和开票信息；我们还可能收到支付服务提供者返回的订单号、金额和支付状态。完整的支付账户信息通常由支付服务提供者依照其规则处理。",
              en: "When you register for or use online services, you may provide your email, company name, account identifiers, and verification information. When you purchase paid services, you may provide order and invoicing information; we may also receive the order number, amount, and payment status returned by the payment service provider. Complete payment account information is generally handled by the payment service provider under its own rules.",
            },
          },
          {
            b: { zh: "您提交或授权处理的内容。", en: "Content you submit or authorize for processing. " },
            t: {
              zh: "当您使用检测、评测、安全防护或其他产品功能时，您可能会提交文本、文件、工具、项目资料或其他内容。我们会在提供相应功能所必要的范围内处理这些内容以及相关的输入、输出和分析结果。",
              en: "When you use detection, evaluation, security protection, or other product features, you may submit text, files, tools, project materials, or other content. We process such content, and the related inputs, outputs, and analysis results, only to the extent necessary to provide the corresponding features.",
            },
          },
          {
            b: { zh: "技术支持和故障反馈信息。", en: "Technical support and fault report information. " },
            t: {
              zh: "当您主动请求技术支持、提交反馈或启用故障信息上传功能时，您可能会提供联系方式、问题描述、故障发生时间、设备和操作系统信息、应用状态、错误事件、诊断日志、截图或附件。我们使用这些信息定位问题、提供支持并保障服务稳定。",
              en: "When you request technical support, submit feedback, or enable fault-report upload features, you may provide contact information, problem descriptions, when the fault occurred, device and operating system information, application state, error events, diagnostic logs, screenshots, or attachments. We use this information to locate problems, provide support, and keep the service stable.",
            },
          },
          {
            b: { zh: "招聘信息。", en: "Recruitment information. " },
            t: {
              zh: "当您通过招聘邮箱等渠道申请职位时，您可能会提供姓名、联系方式、简历、教育和工作经历、应聘职位以及其他求职资料。我们使用这些信息评估应聘资格、安排面试并与您沟通。",
              en: "When you apply for a position through channels such as our recruitment email, you may provide your name, contact information, résumé, education and work history, the position you are applying for, and other application materials. We use this information to assess qualifications, arrange interviews, and communicate with you.",
            },
          },
        ],
      },
      { kind: "h4", t: { zh: "1.2 您使用网站、产品和服务时产生的信息", en: "1.2 Information generated when you use our website, products, and services" } },
      {
        kind: "p",
        t: {
          zh: "当您访问网站或使用在线服务时，系统可能自动产生以下信息：",
          en: "When you visit our website or use online services, our systems may automatically generate the following information:",
        },
      },
      {
        kind: "ul",
        items: [
          {
            b: { zh: "网站访问及日志信息。", en: "Website access and log information. " },
            t: {
              zh: "包括 IP 地址、访问时间、浏览器和设备类型、操作系统、访问页面、来源页面、Cookie 或类似技术生成的标识，以及网络和安全日志。这些信息用于展示和维护网站、排查故障、防范攻击与滥用，并履行网络安全义务。",
              en: "Including IP addresses, access times, browser and device types, operating systems, pages visited, referring pages, identifiers generated by cookies or similar technologies, and network and security logs. This information is used to display and maintain the website, troubleshoot faults, prevent attacks and abuse, and fulfill our cybersecurity obligations.",
            },
          },
          {
            b: { zh: "服务使用及安全信息。", en: "Service usage and security information. " },
            t: {
              zh: "包括服务使用时间、IP 地址、接口或调用路径、调用状态、使用量、错误记录和安全事件。我们使用这些信息提供和维护服务、进行身份与权限校验、统计服务用量、发现异常活动并解决技术问题。",
              en: "Including service usage times, IP addresses, API or call paths, call status, usage volumes, error records, and security events. We use this information to provide and maintain services, verify identity and permissions, measure service usage, detect abnormal activity, and resolve technical issues.",
            },
          },
          {
            b: { zh: "企业级运行安全信息。", en: "Enterprise runtime security information. " },
            t: {
              zh: "当企业客户启用相关产品能力时，系统可能根据客户选择的部署方式、功能和配置，处理运行状态、安全事件、审计记录以及必要的系统行为与上下文信息，用于提供运行安全观测、风险分析、告警、处置和审计能力。具体处理范围以客户配置、合同约定及相关产品的专项说明为准。",
              en: "When an enterprise customer enables the relevant product capabilities, our systems may — depending on the deployment mode, features, and configuration the customer chooses — process runtime status, security events, audit records, and the necessary system behavior and context information, in order to provide runtime security observation, risk analysis, alerting, response, and audit capabilities. The exact scope of processing is subject to the customer's configuration, the contractual agreement, and the dedicated documentation of the relevant product.",
            },
          },
        ],
      },
      { kind: "h4", t: { zh: "1.3 我们从第三方获得的信息", en: "1.3 Information we obtain from third parties" } },
      {
        kind: "p",
        t: {
          zh: "在符合法律要求的情况下，我们可能从以下来源获得与您有关的信息：",
          en: "Where permitted by law, we may obtain information about you from the following sources:",
        },
      },
      {
        kind: "ul",
        items: [
          {
            t: {
              zh: "您所在的企业或组织向我们提供的企业账号、成员身份、权限配置和服务管理信息；",
              en: "enterprise accounts, member identities, permission configurations, and service management information provided to us by your company or organization;",
            },
          },
          {
            t: {
              zh: "支付服务提供者向我们返回的订单号、金额、支付状态和退款状态；",
              en: "order numbers, amounts, payment status, and refund status returned to us by payment service providers;",
            },
          },
          {
            t: {
              zh: "经您授权的合作方，或者依法可以提供相关信息的其他主体。",
              en: "partners authorized by you, or other parties that may lawfully provide the relevant information.",
            },
          },
        ],
      },
      {
        kind: "p",
        t: {
          zh: "我们会要求信息提供方说明其个人信息来源，并确认其具有相应的合法依据。我们仅在本政策所述目的和必要范围内使用收到的信息。",
          en: "We require information providers to explain the source of the personal information and to confirm that they have a lawful basis for providing it. We use the information we receive only for the purposes and within the scope of necessity described in this policy.",
        },
      },
      { kind: "h3", t: { zh: "2. 我们如何使用这些信息", en: "2. How we use this information" } },
      {
        kind: "p",
        t: {
          zh: "我们可能将上述信息用于以下目的：",
          en: "We may use the information described above for the following purposes:",
        },
      },
      {
        kind: "ul",
        items: [
          {
            t: {
              zh: "提供、交付和维护您所选择的网站、产品或服务，保障其正常运行；",
              en: "providing, delivering, and maintaining the website, products, or services you choose, and keeping them running properly;",
            },
          },
          {
            t: {
              zh: "创建和管理账号，进行身份认证、权限校验、服务计量、结算与开票；",
              en: "creating and managing accounts, and performing identity verification, permission checks, service metering, settlement, and invoicing;",
            },
          },
          {
            t: {
              zh: "回复咨询、安排演示、提供客户支持，并处理意见、投诉和请求；",
              en: "answering inquiries, arranging demos, providing customer support, and handling feedback, complaints, and requests;",
            },
          },
          {
            t: {
              zh: "诊断故障、修复错误、分析安全事件，防范攻击、欺诈、滥用和未经授权的访问；",
              en: "diagnosing faults, fixing errors, and analyzing security incidents; preventing attacks, fraud, abuse, and unauthorized access;",
            },
          },
          {
            t: {
              zh: "统计必要的去标识化或汇总运行指标，用于容量管理、稳定性分析和故障排查；",
              en: "computing necessary de-identified or aggregated operational metrics for capacity management, stability analysis, and troubleshooting;",
            },
          },
          {
            t: {
              zh: "履行合同、法律法规规定的义务，以及配合有权机关依法开展的工作；",
              en: "fulfilling contractual and statutory obligations, and cooperating with competent authorities as required by law;",
            },
          },
          {
            t: {
              zh: "用于另行向您说明并依法取得必要授权的其他目的。",
              en: "other purposes separately explained to you for which we obtain the necessary authorization as required by law.",
            },
          },
        ],
      },
      {
        kind: "p",
        t: {
          zh: "对于您提交或授权处理的内容以及您主动提交的故障信息，除非另行向您明确说明并取得必要授权，我们不会将其用于训练通用模型或检测模型。",
          en: "We will not use the content you submit or authorize for processing, or the fault information you actively submit, to train general-purpose or detection models, unless this is separately and clearly explained to you and the necessary authorization is obtained.",
        },
      },
      { kind: "h3", t: { zh: "3. 关于产品运行数据和故障信息", en: "3. Product runtime data and fault information" } },
      {
        kind: "p",
        t: {
          zh: "部分方寸跃迁产品用于分析 AI 系统或智能体的运行状态和安全事件。相关数据可能在客户本地环境处理，也可能根据客户选择的部署方式和合同约定在指定环境中处理。",
          en: "Some Fangcun Leap products are used to analyze the runtime status and security events of AI systems or agents. The related data may be processed in the customer's local environment, or in a designated environment according to the deployment mode chosen by the customer and the contractual agreement.",
        },
      },
      {
        kind: "p",
        t: {
          zh: "如果相关数据始终保留在客户本地且未向我们传输，我们不会因此取得这些数据。当客户启用云端功能、远程支持，或者由用户主动提交故障信息、诊断日志或其他材料时，我们仅在相应功能、客户指示和合同约定的范围内处理收到的信息。",
          en: "If such data always remains in the customer's local environment and is never transmitted to us, we do not thereby obtain it. When a customer enables cloud features or remote support, or a user actively submits fault information, diagnostic logs, or other materials, we process the information we receive only within the scope of the corresponding features, the customer's instructions, and the contractual agreement.",
        },
      },
      {
        kind: "p",
        t: {
          zh: "故障日志、截图、附件或运行上下文可能包含个人信息、业务数据或第三方信息。提交前，请检查相关内容，并移除与故障排查无关的密码、密钥、访问令牌和其他敏感信息。",
          en: "Fault logs, screenshots, attachments, or runtime context may contain personal information, business data, or third-party information. Before submitting, please review the content and remove passwords, keys, access tokens, and other sensitive information unrelated to the troubleshooting.",
        },
      },
      {
        kind: "p",
        t: {
          zh: "独立的 Observer 应用、客户端或云服务正式提供时，我们将根据其实际部署方式、数据范围和控制功能另行提供产品隐私政策或专项说明。",
          en: "When the standalone Observer application, client, or cloud service is officially launched, we will provide a separate product privacy policy or dedicated statement based on its actual deployment mode, data scope, and control features.",
        },
      },
      { kind: "h3", t: { zh: "4. 处理个人信息的依据", en: "4. Legal bases for processing personal information" } },
      {
        kind: "p",
        t: {
          zh: "根据具体场景，我们可能基于以下一项或多项依据处理个人信息：",
          en: "Depending on the scenario, we may process personal information based on one or more of the following legal bases:",
        },
      },
      {
        kind: "ol",
        items: [
          { zh: "已取得您的同意；", en: "your consent has been obtained;" },
          { zh: "为订立或履行您作为一方当事人的合同所必需；", en: "it is necessary to conclude or perform a contract to which you are a party;" },
          { zh: "为履行法定职责或法定义务所必需；", en: "it is necessary to perform statutory duties or obligations;" },
          { zh: "为应对突发公共卫生事件，或者紧急情况下保护自然人的生命健康和财产安全所必需；", en: "it is necessary to respond to a sudden public health incident, or to protect the life, health, and property of natural persons in an emergency;" },
          { zh: "在合理范围内处理您自行公开或者其他已经合法公开的个人信息；", en: "it is processing, within a reasonable scope, personal information that you have disclosed yourself or that has otherwise been lawfully made public;" },
          { zh: "法律、行政法规规定的其他情形。", en: "other circumstances provided by laws and administrative regulations." },
        ],
      },
      {
        kind: "p",
        t: {
          zh: "如果处理目的、处理方式或个人信息种类发生实质变化，我们将依法重新履行告知义务；需要取得同意或单独同意的，我们将另行征得您的同意。",
          en: "If the purpose or method of processing or the types of personal information change materially, we will re-perform our notification obligations as required by law; where consent or separate consent is required, we will seek your consent again.",
        },
      },
      { kind: "h3", t: { zh: "5. 敏感个人信息", en: "5. Sensitive personal information" } },
      {
        kind: "p",
        t: {
          zh: "我们一般不会通过官网主动要求您提供生物识别、医疗健康、金融账户、精确行踪轨迹、特定身份等敏感个人信息。您提交的内容、日志、截图、附件或简历仍可能包含敏感个人信息。",
          en: "We generally do not ask you to actively provide sensitive personal information — such as biometric data, medical and health information, financial accounts, precise whereabouts, or specific identity — through the official website. Content, logs, screenshots, attachments, or résumés you submit may still contain sensitive personal information.",
        },
      },
      {
        kind: "p",
        t: {
          zh: "如某项功能确有必要处理敏感个人信息，我们将说明处理的必要性、具体目的、处理方式和对个人权益的影响，并依法取得单独同意或履行其他必要程序。请勿提交与使用目的无关的敏感个人信息。",
          en: "If a feature genuinely requires processing sensitive personal information, we will explain the necessity, the specific purpose, the processing method, and the impact on your rights and interests, and obtain separate consent or complete other required procedures as required by law. Please do not submit sensitive personal information unrelated to the purpose of use.",
        },
      },
    ],
  },

  // 三、Cookie 和类似技术
  {
    title: { zh: "三、Cookie 和类似技术", en: "3. Cookies and Similar Technologies" },
    blocks: [
      {
        kind: "p",
        t: {
          zh: "我们可能使用 Cookie、本地存储或类似技术，以维持网站和账号会话、记录必要设置、保障安全、排查故障，并了解网站和服务的基本运行情况。",
          en: "We may use cookies, local storage, or similar technologies to maintain website and account sessions, record necessary settings, ensure security, troubleshoot faults, and understand the basic operation of our website and services.",
        },
      },
      {
        kind: "p",
        t: {
          zh: "对于严格必要的 Cookie，停用后可能导致部分网站或服务功能无法正常使用。对于非必要的统计、分析或营销类 Cookie，我们将在适用法律要求的范围内提供相应告知和选择。您也可以通过浏览器设置管理或删除 Cookie。",
          en: "For strictly necessary cookies, disabling them may cause parts of the website or services to malfunction. For non-essential analytics or marketing cookies, we will provide the required notices and choices to the extent required by applicable law. You can also manage or delete cookies through your browser settings.",
        },
      },
      {
        kind: "p",
        t: {
          zh: "如果我们未来使用新的第三方统计、广告或跨站追踪工具，将在启用前更新相关说明，并依法提供拒绝或撤回方式。",
          en: "If we adopt new third-party analytics, advertising, or cross-site tracking tools in the future, we will update the relevant descriptions before enabling them and provide ways to refuse or withdraw as required by law.",
        },
      },
    ],
  },

  // 四、个人信息的委托处理、提供、转移与公开
  {
    title: { zh: "四、个人信息的委托处理、提供、转移与公开", en: "4. Commissioned Processing, Provision, Transfer, and Public Disclosure of Personal Information" },
    blocks: [
      { kind: "h3", t: { zh: "1. 委托处理", en: "1. Commissioned processing" } },
      {
        kind: "p",
        t: {
          zh: "为提供和维护网站及服务，我们可能委托基础设施、云计算、网络安全、邮件通信、技术支持或支付服务提供者处理必要的个人信息。我们会通过合同约定处理目的、期限、方式、信息种类、保护措施和双方责任，并对受托方的处理活动进行监督。",
          en: "To provide and maintain our website and services, we may commission infrastructure, cloud computing, network security, email, technical support, or payment service providers to process necessary personal information. We enter into contracts that specify the purpose, duration, method, types of information, protection measures, and responsibilities of both parties, and we supervise the processors' handling activities.",
        },
      },
      {
        kind: "p",
        t: {
          zh: "根据官网现有服务，可能涉及的主要第三方包括：",
          en: "Based on the current services of the official website, the main third parties that may be involved are:",
        },
      },
      {
        kind: "table",
        headers: [
          { zh: "第三方或服务类别", en: "Third party or service category" },
          { zh: "处理场景", en: "Processing scenario" },
          { zh: "可能涉及的信息", en: "Information potentially involved" },
        ],
        rows: [
          [
            { zh: "阿里云等基础设施服务提供者", en: "Alibaba Cloud and other infrastructure service providers" },
            { zh: "网站、服务器、存储和安全防护", en: "Website, servers, storage, and security protection" },
            { zh: "网站访问日志、账号和服务运行所需信息", en: "Website access logs and information necessary for account and service operation" },
          ],
          [
            { zh: "支付宝、微信支付等支付服务提供者（仅在启用相应付费功能时）", en: "Alipay, WeChat Pay, and other payment service providers (only when the corresponding paid features are enabled)" },
            { zh: "支付、退款、对账", en: "Payments, refunds, reconciliation" },
            { zh: "订单号、金额、支付状态；支付账户信息由相应支付服务提供者依其规则处理", en: "Order numbers, amounts, payment status; payment account information is handled by the respective payment service provider under its own rules" },
          ],
        ],
      },
      {
        kind: "p",
        t: {
          zh: "我们将在实际接入新的、会处理个人信息的第三方服务时，更新本政策、第三方信息共享清单或相关产品页面。",
          en: "We will update this policy, the third-party information sharing list, or the relevant product pages when we actually onboard a new third-party service that processes personal information.",
        },
      },
      { kind: "h3", t: { zh: "2. 向其他个人信息处理者提供", en: "2. Provision to other personal information processors" } },
      {
        kind: "p",
        t: {
          zh: "我们不会出售您的个人信息。除下列情形外，我们不会向其他个人信息处理者提供您的个人信息：",
          en: "We do not sell your personal information. Except in the following circumstances, we will not provide your personal information to other personal information processors:",
        },
      },
      {
        kind: "ol",
        items: [
          {
            zh: "已向您告知接收方、处理目的、处理方式和个人信息种类，并依法取得您的单独同意；",
            en: "you have been informed of the recipient, the purpose, the method of processing, and the types of personal information, and your separate consent has been obtained as required by law;",
          },
          {
            zh: "根据法律法规、诉讼争议解决需要，或者行政、司法机关依法提出的要求提供；",
            en: "provision as required by laws and regulations, for litigation or dispute resolution, or upon requests lawfully made by administrative or judicial authorities;",
          },
          {
            zh: "为保护您、我们或他人的生命健康、财产安全或其他重大合法权益所合理必要；",
            en: "where reasonably necessary to protect the life, health, property, or other major lawful rights and interests of you, us, or others;",
          },
          {
            zh: "发生合并、分立、重组、资产转让、解散或破产等交易时，依法向接收方转移。我们将告知接收方信息，并要求其继续遵守本政策和适用法律；如其变更处理目的或方式，应重新履行法定程序。",
            en: "transfer to a recipient in accordance with the law upon a merger, division, restructuring, asset transfer, dissolution, bankruptcy, or similar transaction. We will inform you of the recipient and require it to continue to comply with this policy and applicable law; if it changes the purpose or method of processing, it must complete the required statutory procedures again.",
          },
        ],
      },
      { kind: "h3", t: { zh: "3. 公开披露", en: "3. Public disclosure" } },
      {
        kind: "p",
        t: {
          zh: "我们原则上不公开您的个人信息。确需公开时，我们将告知公开的目的和信息种类，并依法取得单独同意，法律法规另有规定的除外。",
          en: "In principle, we do not make your personal information public. Where disclosure is genuinely necessary, we will inform you of the purpose and types of information disclosed and obtain separate consent as required by law, unless otherwise provided by laws and regulations.",
        },
      },
    ],
  },

  // 五、企业客户及组织账号
  {
    title: { zh: "五、企业客户及组织账号", en: "5. Enterprise Customers and Organizational Accounts" },
    blocks: [
      {
        kind: "p",
        t: {
          zh: "如果您通过所在单位提供的账号、设备或环境使用我们的企业产品，您的单位管理员可能依据其管理权限访问或管理账号、配置、运行记录和审计信息。企业客户有责任确定合法的处理目的和范围，并依法向相关个人进行告知、取得必要授权、设置适当权限和保存期限。",
          en: "If you use our enterprise products through an account, device, or environment provided by your organization, your organization's administrators may, within their administrative privileges, access or manage accounts, configurations, runtime records, and audit information. Enterprise customers are responsible for determining lawful processing purposes and scope, and for informing the relevant individuals, obtaining the necessary authorization, and setting appropriate permissions and retention periods as required by law.",
        },
      },
      {
        kind: "p",
        t: {
          zh: "当我们受企业客户委托处理个人信息时，我们将按照客户的合法指示和双方合同处理，不擅自改变处理目的和方式。对于此类数据，您通常可以先向所在单位或相关企业客户提出权利请求；我们将按照合同和法律要求协助企业客户处理。",
          en: "When we process personal information commissioned by an enterprise customer, we do so in accordance with the customer's lawful instructions and the contract between the parties, and do not change the purpose or method of processing on our own. For such data, you can usually first make a rights request to your organization or the relevant enterprise customer; we will assist the enterprise customer in handling it in accordance with the contract and the law.",
        },
      },
    ],
  },

  // 六、个人信息的存储地点和保存期限
  {
    title: { zh: "六、个人信息的存储地点和保存期限", en: "6. Storage Location and Retention Period of Personal Information" },
    blocks: [
      {
        kind: "p",
        t: {
          zh: "我们将在实现处理目的所必要的最短时间内保存个人信息。保存期限届满或处理目的不再需要时，我们将依法删除或匿名化处理；法律法规规定必须继续保存，或者删除在技术上难以实现的，我们将停止除存储和采取必要安全保护措施之外的处理。",
          en: "We retain personal information only for the shortest period necessary to achieve the processing purpose. When the retention period expires or the purpose is no longer needed, we will delete or anonymize the information as required by law; where laws or regulations require continued retention, or where deletion is technically difficult to achieve, we will stop processing the information except for storage and necessary security protection measures.",
        },
      },
      {
        kind: "p",
        t: {
          zh: "通常情况下，我们按照以下标准确定保存期限：",
          en: "In general, we determine retention periods according to the following standards:",
        },
      },
      {
        kind: "table",
        headers: [
          { zh: "信息类型", en: "Type of information" },
          { zh: "一般保存期限或确定方式", en: "General retention period or how it is determined" },
        ],
        rows: [
          [
            { zh: "网络及安全日志", en: "Network and security logs" },
            { zh: "按网络安全法律法规要求保存，通常不少于六个月；超过必要期限后删除或匿名化", en: "Retained as required by cybersecurity laws and regulations, generally no less than six months; deleted or anonymized after the necessary period" },
          ],
          [
            { zh: "商务咨询、演示申请和沟通记录", en: "Business inquiries, demo requests, and communications" },
            { zh: "在处理咨询和维持商务联系期间保存；没有形成持续业务关系的，原则上自最后一次实质沟通之日起不超过三年", en: "Retained while handling inquiries and maintaining the business relationship; where no ongoing business relationship is formed, in principle no more than three years from the last substantive communication" },
          ],
          [
            { zh: "账号信息", en: "Account information" },
            { zh: "在账号存续和提供服务期间保存；账号注销或服务终止后，在完成结算、安全审计和法定义务所需期限届满后删除或匿名化", en: "Retained while the account exists and services are provided; after account cancellation or service termination, deleted or anonymized once settlement, security audit, and statutory obligations are complete" },
          ],
          [
            { zh: "用户提交的内容和服务记录", en: "User-submitted content and service records" },
            { zh: "按照具体产品功能、用户设置、合同约定或专项隐私说明保存", en: "Retained according to the specific product features, user settings, contractual agreements, or dedicated privacy statements" },
          ],
          [
            { zh: "主动提交的故障和诊断信息", en: "Actively submitted fault and diagnostic information" },
            { zh: "保存至问题解决及必要的复核期结束，原则上不超过问题关闭后六个月；涉及安全事件、争议或法定义务的除外", en: "Retained until the issue is resolved and the necessary review period ends, in principle no more than six months after the issue is closed; except where security incidents, disputes, or statutory obligations are involved" },
          ],
          [
            { zh: "招聘资料", en: "Recruitment materials" },
            { zh: "原则上保存至本次招聘结束后六个月；如希望纳入人才库，我们将另行征得同意并说明保存期限", en: "In principle retained for six months after the current recruitment ends; if you wish to be included in our talent pool, we will seek separate consent and explain the retention period" },
          ],
          [
            { zh: "订单、交易和开票记录", en: "Order, transaction, and invoicing records" },
            { zh: "按照税务、会计、电子商务等适用法律规定的期限保存", en: "Retained for the periods required by applicable tax, accounting, and e-commerce laws" },
          ],
        ],
      },
      {
        kind: "p",
        t: {
          zh: "我们原则上将在中华人民共和国境内存储在境内业务中收集和产生的个人信息。如果确需向境外提供个人信息，我们将依法告知境外接收方、处理目的、处理方式、信息种类和权利行使方式，取得单独同意，并履行数据出境安全评估、个人信息保护认证、标准合同或其他适用程序。",
          en: "In principle, personal information collected and generated in business within the People's Republic of China is stored within the PRC. Where cross-border provision of personal information is genuinely necessary, we will inform you of the overseas recipient, the processing purpose and method, the types of information, and how to exercise your rights; obtain separate consent; and complete the data export security assessment, personal information protection certification, standard contract filing, or other applicable procedures required by law.",
        },
      },
    ],
  },

  // 七、我们如何保护个人信息
  {
    title: { zh: "七、我们如何保护个人信息", en: "7. How We Protect Personal Information" },
    blocks: [
      {
        kind: "p",
        t: {
          zh: "我们根据个人信息的类型、处理场景和风险采取合理的技术与管理措施，包括访问控制、身份认证、加密或去标识化、安全审计、备份、权限管理、人员培训和应急处置等，以防止未经授权的访问以及个人信息泄露、篡改、丢失或滥用。",
          en: "We take reasonable technical and organizational measures based on the type of personal information, the processing scenario, and the risks involved — including access control, identity authentication, encryption or de-identification, security auditing, backup, permission management, personnel training, and incident response — to prevent unauthorized access and the leakage, tampering, loss, or misuse of personal information.",
        },
      },
      {
        kind: "p",
        t: {
          zh: "互联网环境无法保证绝对安全。如果发生或者可能发生个人信息泄露、篡改、丢失，我们将依法采取补救措施，并在法律要求的情形下向有关主管部门报告、向受影响个人告知事件情况、可能影响及已采取或建议采取的措施。",
          en: "No internet environment can guarantee absolute security. If a leakage, tampering, or loss of personal information occurs or may occur, we will take remedial measures as required by law and, where required by law, report to the competent authorities and notify affected individuals of the incident, its potential impact, and the measures taken or recommended.",
        },
      },
    ],
  },

  // 八、您的个人信息权利
  {
    title: { zh: "八、您的个人信息权利", en: "8. Your Personal Information Rights" },
    blocks: [
      {
        kind: "p",
        t: {
          zh: "在适用法律规定的范围内，您对个人信息处理享有知情、决定、限制或拒绝处理的权利，并可以请求：",
          en: "To the extent provided by applicable law, you have the right to know about, decide on, restrict, or refuse the processing of your personal information, and may request:",
        },
      },
      {
        kind: "ol",
        items: [
          { zh: "查阅、复制您的个人信息；", en: "to access and copy your personal information;" },
          { zh: "更正、补充不准确或不完整的个人信息；", en: "correction or supplementation of inaccurate or incomplete personal information;" },
          { zh: "删除符合条件的个人信息；", en: "deletion of personal information that meets the applicable conditions;" },
          { zh: "撤回基于同意作出的授权；", en: "withdrawal of authorization given based on consent;" },
          { zh: "注销账号或停止相应服务；", en: "account cancellation or termination of the corresponding services;" },
          { zh: "在符合法定条件时请求转移个人信息；", en: "transfer of your personal information where statutory conditions are met;" },
          { zh: "要求我们解释说明个人信息处理规则；", en: "an explanation of our personal information processing rules;" },
          { zh: "对我们的处理活动提出投诉或建议。", en: "to lodge complaints about, or make suggestions regarding, our processing activities." },
        ],
      },
      {
        kind: "p",
        t: {
          zh: "您可以通过本政策“联系我们”部分所列邮箱提交请求。为保护个人信息安全，我们可能要求您提供必要信息以核验身份。我们将在核实身份后依法及时处理；如无法满足您的请求，我们将说明理由。对于无端重复、超出合理范围、需要过多技术手段、可能损害他人合法权益或法律规定无需响应的请求，我们可能依法予以限制或拒绝。",
          en: "You may submit requests via the email address listed in the \"Contact us\" section of this policy. To protect the security of your personal information, we may ask you for the information necessary to verify your identity. We will handle verified requests promptly as required by law; if we cannot fulfill your request, we will explain why. We may lawfully limit or refuse requests that are unreasonably repetitive, excessive in scope, require disproportionate technical means, may harm the lawful rights of others, or that the law does not require us to respond to.",
        },
      },
      {
        kind: "p",
        t: {
          zh: "如果逝者生前没有其他安排，其近亲属可以为了自身合法、正当利益，依法对逝者的相关个人信息行使查阅、复制、更正、删除等权利。",
          en: "Unless the deceased arranged otherwise during their lifetime, their close relatives may, for their own lawful and legitimate interests, exercise rights such as access, copying, correction, and deletion of the deceased's relevant personal information in accordance with the law.",
        },
      },
      {
        kind: "p",
        t: {
          zh: "撤回同意不影响撤回前基于同意已经开展的处理活动。对于履行合同、法定义务或保障安全所必需的信息，撤回同意可能不影响我们基于其他合法依据继续进行必要处理。",
          en: "Withdrawing consent does not affect processing activities already carried out based on consent before the withdrawal. For information necessary to perform a contract, fulfill statutory obligations, or ensure security, withdrawal of consent may not affect our continued necessary processing based on other lawful bases.",
        },
      },
    ],
  },

  // 九、商业信息与自动化决策
  {
    title: { zh: "九、商业信息与自动化决策", en: "9. Commercial Messages and Automated Decision-Making" },
    blocks: [
      {
        kind: "p",
        t: {
          zh: "如果我们向您发送产品、服务或活动信息，将在适用法律要求的范围内取得必要授权，并提供便捷的退订或拒绝方式。",
          en: "If we send you information about products, services, or events, we will obtain the necessary authorization to the extent required by applicable law and provide convenient ways to unsubscribe or refuse.",
        },
      },
      {
        kind: "p",
        t: {
          zh: "目前，我们不会仅通过自动化决策作出对个人权益产生重大影响的决定。未来如开展此类处理，我们将依法保证透明、公平和公正，并向您提供说明、拒绝仅通过自动化决策作出决定或其他适用的权利保障。",
          en: "At present, we do not make decisions with a major impact on individuals' rights and interests solely through automated decision-making. If we engage in such processing in the future, we will ensure transparency, fairness, and impartiality as required by law, and provide you with explanations, the right to refuse decisions made solely through automated decision-making, or other applicable safeguards.",
        },
      },
    ],
  },

  // 十、未成年人个人信息
  {
    title: { zh: "十、未成年人个人信息", en: "10. Minors' Personal Information" },
    blocks: [
      {
        kind: "p",
        t: {
          zh: "我们的官网和企业级产品主要面向企业、专业人士和开发者，不专门面向不满十四周岁的未成年人。我们不会明知而主动收集不满十四周岁未成年人的个人信息。",
          en: "Our website and enterprise products are primarily intended for businesses, professionals, and developers, and are not directed at minors under the age of fourteen. We do not knowingly collect the personal information of minors under fourteen.",
        },
      },
      {
        kind: "p",
        t: {
          zh: "如果某项产品或服务确需处理不满十四周岁未成年人的个人信息，我们将制定专门的个人信息处理规则，并依法取得其父母或其他监护人的同意。如果您发现未成年人未经监护人同意向我们提供了个人信息，请及时联系我们，我们将依法核实和处理。",
          en: "If a product or service genuinely needs to process the personal information of minors under fourteen, we will establish dedicated personal information processing rules and obtain the consent of their parents or other guardians as required by law. If you find that a minor has provided personal information to us without a guardian's consent, please contact us promptly; we will verify and handle it in accordance with the law.",
        },
      },
    ],
  },

  // 十一、本政策的更新
  {
    title: { zh: "十一、本政策的更新", en: "11. Updates to This Policy" },
    blocks: [
      {
        kind: "p",
        t: {
          zh: "我们可能根据业务变化、产品调整或法律法规要求更新本政策。更新后的政策将在官网显著位置公布，并标明最近更新日期。",
          en: "We may update this policy in response to business changes, product adjustments, or legal requirements. The updated policy will be published prominently on the official website together with the date of the latest update.",
        },
      },
      {
        kind: "p",
        t: {
          zh: "如果变更可能对您的个人信息权益产生重大影响，我们将通过网站提示、站内通知、电子邮件或其他适当方式进行显著告知。对于依法需要取得同意的新增处理活动，我们不会仅以您继续使用服务代替取得同意，而会另行履行相应程序。",
          en: "If a change may materially affect your personal information rights and interests, we will provide prominent notice through website notices, in-app messages, email, or other appropriate means. For new processing activities that require consent by law, we will not treat your continued use of the services as consent, but will complete the appropriate procedures separately.",
        },
      },
    ],
  },
];

const CONTACT: { label: L; value: L; href?: string }[] = [
  {
    label: { zh: "个人信息处理者", en: "Personal information handler" },
    value: { zh: "方寸跃迁（雄安）科技有限公司", en: "Fangcun Leap (Xiong'an) Technology Co., Ltd." },
  },
  {
    label: { zh: "注册地址", en: "Registered address" },
    value: {
      zh: "中国（河北）自由贸易试验区雄安片区启动区易宁大街164号创智园北区（人工智能产业园）4单元F2-023",
      en: "Unit F2-023, Building 4, North Zone of Chuangzhi Park (AI Industrial Park), No. 164 Yining Street, Start-up Zone, Xiong'an Area, China (Hebei) Pilot Free Trade Zone",
    },
  },
  {
    label: { zh: "联系邮箱", en: "Contact email" },
    value: { zh: "info@fangcunleap.com", en: "info@fangcunleap.com" },
    href: "mailto:info@fangcunleap.com",
  },
  {
    label: { zh: "官方网站", en: "Official website" },
    value: { zh: "https://fangcunleap.com/", en: "https://fangcunleap.com/" },
    href: "https://fangcunleap.com/",
  },
];

const Privacy = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  return (
    <MarketingPage
      eyebrow={{ en: "Legal", zh: "法律" }}
      title={{ en: "Privacy policy", zh: "隐私政策" }}
      subtitle={{
        en: "Last updated: September 2, 2026 · Effective date: September 2, 2026.",
        zh: "最近更新日期：2026年9月2日 · 生效日期：2026年9月2日。",
      }}
    >
      <div className="mt-10 max-w-3xl space-y-4 text-[14px] leading-relaxed text-gray-700">
        {INTRO.map((p, i) => (
          <p key={i}>{p[lang]}</p>
        ))}
      </div>

      {SECTIONS.map((section) => (
        <MPSection key={section.title.zh} title={section.title}>
          {section.blocks.map((block, i) => {
            switch (block.kind) {
              case "h3":
                return (
                  <h3 key={i} className="mt-8 text-[17px] font-semibold text-gray-900">
                    {block.t[lang]}
                  </h3>
                );
              case "h4":
                return (
                  <h4 key={i} className="mt-6 text-[15px] font-semibold text-gray-900">
                    {block.t[lang]}
                  </h4>
                );
              case "ul":
                return (
                  <ul key={i} className="list-disc space-y-2 pl-5">
                    {block.items.map((item, j) => (
                      <li key={j}>
                        {item.b && <span className="font-semibold">{item.b[lang]}</span>}
                        {item.t[lang]}
                      </li>
                    ))}
                  </ul>
                );
              case "ol":
                return (
                  <ol key={i} className="list-decimal space-y-2 pl-5">
                    {block.items.map((t, j) => (
                      <li key={j}>{t[lang]}</li>
                    ))}
                  </ol>
                );
              case "table":
                return (
                  <div key={i} className="overflow-x-auto">
                    <table className="w-full border-collapse text-left text-[14px]">
                      <thead>
                        <tr>
                          {block.headers.map((h, j) => (
                            <th key={j} className="border border-gray-200 bg-gray-50 px-4 py-2 font-semibold text-gray-900">
                              {h[lang]}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, j) => (
                          <tr key={j}>
                            {row.map((cell, k) => (
                              <td key={k} className="border border-gray-200 px-4 py-2 align-top">
                                {cell[lang]}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              default:
                return <p key={i}>{block.t[lang]}</p>;
            }
          })}
        </MPSection>
      ))}

      {/* 十二、联系我们 */}
      <MPSection title={{ en: "12. Contact Us", zh: "十二、联系我们" }}>
        <dl className="space-y-3">
          {CONTACT.map((row, i) => (
            <div key={i} className="flex flex-col gap-1 md:flex-row md:gap-4">
              <dt className="w-40 shrink-0 font-semibold text-gray-900">{row.label[lang]}</dt>
              <dd>
                {row.href ? (
                  <a
                    href={row.href}
                    className="text-purple-700 underline decoration-purple-300 underline-offset-2 hover:text-purple-900"
                  >
                    {row.value[lang]}
                  </a>
                ) : (
                  row.value[lang]
                )}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-6">
          {isZh
            ? "如果您对本政策、个人信息处理活动或权利请求有任何疑问、意见、投诉或建议，请通过上述邮箱联系我们。我们将在核验相关情况后依法及时处理。"
            : "If you have any questions, comments, complaints, or suggestions about this policy, our personal information processing activities, or rights requests, please contact us via the email address above. We will verify the relevant circumstances and respond promptly in accordance with the law."}
        </p>
      </MPSection>
    </MarketingPage>
  );
};

export default Privacy;
