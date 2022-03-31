import { CheckCircleOutlined } from '@ant-design/icons';
import { theme } from '../../../../styles/theme';

interface PanelHeaderProps {
  textHeader?: string;
}

export default function PanelHeader({ textHeader }: PanelHeaderProps) {
  return (
    <>
      <div className="d-flex" style={{ flexDirection: 'column' }}>
        <span
          style={{
            color: 'color: #333333',
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          {textHeader}
        </span>
        {/* <span
          style={{
            color: theme.gray,
            fontSize: 9,
            fontWeight: 400,
          }}
        >
          Preenchimento completo
        </span> */}
      </div>
      {/* <CheckCircleOutlined style={{ color: theme.primary }} /> */}
    </>
  );
}
