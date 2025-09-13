import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from "antd";

const AntConfigProvider = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#D6FD60",           // --color-primary
                    colorTextLightSolid: '#003C51', // Button text color
                    colorSuccess: "#003C51",       // --color-success
                    colorWarning: "#f59e0b",       // --color-warning
                    colorError: "#dc2626",         // --color-error
                    colorInfo: "#0ea5e9",          // --color-info
                    colorTextBase: "#111827",      // --color-text-base
                    colorBgBase: "#ffffff",        // --color-bg-base
                },
            }}
        >
            <AntdRegistry>
                {children}
            </AntdRegistry>
        </ConfigProvider>
    );
};

export default AntConfigProvider;