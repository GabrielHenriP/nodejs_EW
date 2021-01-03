/*CREATE DATABASE firstdb;*/

CREATE TABLE t4t2019 (
  id SERIAL,
  DATA DATE,
  REG_ANS VARCHAR(50),
  CD_CONTA_CONTABIL VARCHAR(50),
  DESCRICAO VARCHAR(255),
  VL_SALDO_FINAL VARCHAR(50),
  PRIMARY KEY (id)
);

psql -c "\copy t4t2019(data_,reg_ans,cd_conta_contabil,descricao,vl_saldo_final)
FROM 'C:\Users\soadh\OneDrive\Documentos\nodejs_EW\00-database\files\4T2019.csv'
DELIMITER ','
CSV HEADER"


DROP TABLE [IF EXISTS] t4t2019 [CASCADE | RESTRICT];