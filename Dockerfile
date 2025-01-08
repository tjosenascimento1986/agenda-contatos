# Use a imagem oficial do Apache
FROM php:8.1-apache

# Instalar a extensão mysqli
RUN docker-php-ext-install mysqli

# Habilitar o mod_rewrite (caso precise)
RUN a2enmod rewrite

# Copia os arquivos do seu app para o diretório padrão do Apache
# Substitua 'meu_app/' pelo caminho do seu app
COPY . /var/www/html/

# Expõe a porta 80
EXPOSE 80

# O comando de inicialização do Apache já está configurado na imagem oficial