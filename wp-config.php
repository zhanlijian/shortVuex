<?php
/**
 * WordPress���������ļ���
 *
 * ����ļ�����װ���������Զ�����wp-config.php�����ļ���
 * �����Բ�ʹ����վ������Ҫ�ֶ���������ļ���
 * ��������Ϊ��wp-config.php����Ȼ�����������Ϣ��
 *
 * ���ļ�������������ѡ�
 *
 * * MySQL����
 * * ��Կ
 * * ���ݿ����ǰ׺
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/zh-cn:%E7%BC%96%E8%BE%91_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL ���� - ������Ϣ����������ʹ�õ����� ** //
/** WordPress���ݿ������ */
define('DB_NAME', 'wordpress');

/** MySQL���ݿ��û��� */
define('DB_USER', 'root');

/** MySQL���ݿ����� */
define('DB_PASSWORD', 'root');

/** MySQL���� */
define('DB_HOST', 'localhost');

/** �������ݱ�ʱĬ�ϵ����ֱ��� */
define('DB_CHARSET', 'utf8mb4');

/** ���ݿ��������͡��粻ȷ��������� */
define('DB_COLLATE', '');

/**#@+
 * �����֤��Կ���Ρ�
 *
 * �޸�Ϊ�����һ�޶����ִ���
 * ����ֱ�ӷ���{@link https://api.wordpress.org/secret-key/1.1/salt/
 * WordPress.org��Կ���ɷ���}
 * �κ��޸Ķ��ᵼ������cookiesʧЧ�������û����������µ�¼��
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'aiFL!GlHpoda}8Pq9E_}B03g!?YK=A^SBR?uABbwzW<pi(Br?.!tvW2|XeUS7+)$');
define('SECURE_AUTH_KEY',  'w^IYa6tVf38p{6r:/p#>3i69Tl1E+O45nB|XO>xlVZ;O[O2P4h36%gXp#%p_]p#n');
define('LOGGED_IN_KEY',    'qy/vDX.yUV+vOxzAG{W8FxZiC(b?1*Xl]XPQ4>%SJgF,[;:!16*RB0QQV?RFZ>BK');
define('NONCE_KEY',        'Ir9&`geDea^L3{OrK81lmtIXYmM`3S8X*vuY5Kujq~D~,-8Ivq 3-R[^>F1lkUc<');
define('AUTH_SALT',        'dE%[jg6&^;/wP3MM2.21VwpiwDh+uEvhl^<#;)N&SP{gr>*WA#Mu`|? ]ICqO%PV');
define('SECURE_AUTH_SALT', ',.?h!s/y!wx<S]q9ClA%DopaDV?$`T6[Zb;yCE.F=GFVxb.-|dLnKH*u*tE 9{h6');
define('LOGGED_IN_SALT',   '9?sZ9#g4nf[#)-~L~gY<>>}|$B2J2clKhFDlc1V%u;1eq;5t &43Q5<s)@pYhlpW');
define('NONCE_SALT',       ' 9}ND|KD%X3ja:lTgwKKJBX`ReiXNev50J!}X&$(Fgi|KLw KkO[F)z ;kCg-{<j');

/**#@-*/

/**
 * WordPress���ݱ�ǰ׺��
 *
 * ���������ͬһ���ݿ��ڰ�װ���WordPress��������Ϊÿ��WordPress����
 * ��ͬ�����ݱ�ǰ׺��ǰ׺��ֻ��Ϊ���֡���ĸ���»��ߡ�
 */
$table_prefix  = 'wp_';

/**
 * ������ר�ã�WordPress����ģʽ��
 *
 * �����ֵ��Ϊtrue��WordPress����ʾ�������ڿ�������ʾ��
 * ǿ�ҽ������������ڿ�������������WP_DEBUG��
 *
 * Ҫ��ȡ���������ڵ��Ե���Ϣ�������Codex��
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/**
 * zh_CN���ػ����ã�����ICP��������ʾ
 *
 * �������á��������޸ġ�
 * ������ã����Ƴ���ע�͵����С�
 */
define('WP_ZH_CN_ICP_NUM', true);

/* ���ˣ��벻Ҫ�ټ����༭���뱣�汾�ļ���ʹ����죡 */

/** WordPressĿ¼�ľ���·���� */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** ����WordPress�����Ͱ����ļ��� */
require_once(ABSPATH . 'wp-settings.php');
