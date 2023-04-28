#!/bin/sh
cd /var/www
bin/magento setup:install \
--base-url=http://localhost \
--db-host=mariadb \
--db-name=test \
--db-user=admin \
--db-password=password \
--admin-firstname=admin \
--admin-lastname=admin \
--admin-email=admin@admin.com \
--admin-user=admin \
--admin-password=P@ssw0rd \
--language=en_US \
--currency=USD \
--timezone=America/Chicago \
--use-rewrites=1 \
--elasticsearch-host=elasticsearch \
--search-engine=elasticsearch7
bin/magento cron:install --force
bin/magento indexer:reindex
bin/magento deploy:mode:set developer
exec "$@"
