<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/pt-br:Editando_wp-config.php
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'u148200038_portfolio' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'u148200038_portfolio' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', 'portfolio[*99]' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'EcdcbGve;[v}({QRv1XP%<H|TD%wZ##]NL}:MDAa5Z2-EThU)l07cW< dV^Q,H%`' );
define( 'SECURE_AUTH_KEY',  'U5GAMXJ&s:{[w[uPJ+7Xb_)l1[h~@7g,nj0dB>Ob_akh]9f)sgKq$xVw_#CynY[I' );
define( 'LOGGED_IN_KEY',    'RP/2bTM:+0>lv{1[2PNi^qEt$fDJ^#DNS%S,Fp=+yEp`ahKxKM8M0>gepl-S7)u{' );
define( 'NONCE_KEY',        '}+OLo%VIja3M~AHn~ielo]CVg~!S,=:AZ90}S2fN~K1)u_Tf&aAv7jLM<=yh:*Bo' );
define( 'AUTH_SALT',        'E(s?w  t s,NcPf|a<S_%:N,*U)wu<B,82LZ/v7IAP,D$n:eJH,rp,`uA32Qn^A/' );
define( 'SECURE_AUTH_SALT', 'tcvo-/gUt$t`N2{l,%zRJ^_<a9.S4.hnrcRGtU>2{h8.jOx_B!ECRhBTAT^):up9' );
define( 'LOGGED_IN_SALT',   's,*JEKL3LJIsAP@NP6rSK1UzdeW@naO/FQ|^]k$nb-pU>MH:!q *@Il-;lG;FG ^' );
define( 'NONCE_SALT',       '3R<)ci3Nzle:C-wc@@y6T_W2V$SR_uh>vJ~WfjpCbb,EY,jJqA`gMViT|*DunH9f' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://codex.wordpress.org/pt-br:Depura%C3%A7%C3%A3o_no_WordPress
 */
define('WP_DEBUG', false);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Configura as variáveis e arquivos do WordPress. */
require_once(ABSPATH . 'wp-settings.php');
