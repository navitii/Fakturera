--
-- PostgreSQL database dump
--
-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

-- Started on 2026-04-01 18:18:39

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 224 (class 1259 OID 16415)
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price numeric(10,2) NOT NULL,
    stock integer DEFAULT 0,
    category character varying(100),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- TOC entry 223 (class 1259 OID 16414)
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 5037 (class 0 OID 0)
-- Dependencies: 223
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- TOC entry 220 (class 1259 OID 16390)
-- Name: translations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.translations (
    id integer NOT NULL,
    lang_code character varying(2) NOT NULL,
    key_code character varying(100) NOT NULL,
    content text NOT NULL
);


--
-- TOC entry 219 (class 1259 OID 16389)
-- Name: translations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.translations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 5038 (class 0 OID 0)
-- Dependencies: 219
-- Name: translations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.translations_id_seq OWNED BY public.translations.id;


--
-- TOC entry 222 (class 1259 OID 16403)
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(100) NOT NULL,
    password character varying(100) NOT NULL
);


--
-- TOC entry 221 (class 1259 OID 16402)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 5039 (class 0 OID 0)
-- Dependencies: 221
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 4868 (class 2604 OID 16418)
-- Name: products id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- TOC entry 4866 (class 2604 OID 16393)
-- Name: translations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.translations ALTER COLUMN id SET DEFAULT nextval('public.translations_id_seq'::regclass);


--
-- TOC entry 4867 (class 2604 OID 16406)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 5031 (class 0 OID 16415)
-- Dependencies: 224
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products VALUES (1, 'Product 1', 49.00, 100, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (2, 'Product 2', 99.00, 50, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (3, 'Product 3', 450.00, 5, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (4, 'Product 4', 10.00, 500, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (5, 'Product 5', 25.00, 200, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (6, 'Product 6', 12.50, 1000, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (7, 'Product 7', 15.00, 800, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (8, 'Product 8', 29.00, 300, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (9, 'Product 9', 89.00, 150, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (10, 'Product 10', 20.00, 400, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (11, 'Product 11', 75.00, 100, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (12, 'Product 12', 35.00, 250, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (13, 'Product 13', 120.00, 50, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (14, 'Product 14', 55.00, 60, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (15, 'Product 15', 199.00, 20, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (16, 'Product 16', 15.00, 450, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (17, 'Product 17', 5.00, 100, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (18, 'Product 18', 45.00, 80, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (19, 'Product 19', 30.00, 999, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (20, 'Product 20', 75.00, 15, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (21, 'Product 21', 350.00, 10, 'Hosting', '2026-04-01 02:18:58.118509');
INSERT INTO public.products VALUES (22, 'Product 22', 40.00, 120, 'Hosting', '2026-04-01 02:18:58.118509');


--
-- TOC entry 5027 (class 0 OID 16390)
-- Dependencies: 220
-- Data for Name: translations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.translations VALUES (1, 'en', 'login_header', 'Log in');
INSERT INTO public.translations VALUES (2, 'en', 'label_email', 'Enter your email address');
INSERT INTO public.translations VALUES (3, 'en', 'placeholder_user', 'Email address');
INSERT INTO public.translations VALUES (4, 'en', 'label_password', 'Enter your password');
INSERT INTO public.translations VALUES (5, 'en', 'btn_login', 'Sign in');
INSERT INTO public.translations VALUES (6, 'sv', 'login_header', 'Logga in');
INSERT INTO public.translations VALUES (8, 'sv', 'placeholder_user', 'E-postadress');
INSERT INTO public.translations VALUES (10, 'sv', 'btn_login', 'Logga in');
INSERT INTO public.translations VALUES (21, 'en', 'link_home', 'Home');
INSERT INTO public.translations VALUES (22, 'en', 'link_order', 'Order');
INSERT INTO public.translations VALUES (23, 'en', 'link_contact', 'Contact us');
INSERT INTO public.translations VALUES (24, 'en', 'footer_rights', 'All rights reserved.');
INSERT INTO public.translations VALUES (25, 'sv', 'link_home', 'Hem');
INSERT INTO public.translations VALUES (26, 'sv', 'link_order', 'Beställ');
INSERT INTO public.translations VALUES (27, 'sv', 'link_contact', 'Kontakta oss');
INSERT INTO public.translations VALUES (28, 'sv', 'footer_rights', 'Alla rättigheter förbehållna.');
INSERT INTO public.translations VALUES (29, 'en', 'nav_home', 'Home');
INSERT INTO public.translations VALUES (30, 'en', 'nav_order', 'Order');
INSERT INTO public.translations VALUES (31, 'en', 'nav_customers', 'Our Customers');
INSERT INTO public.translations VALUES (32, 'en', 'nav_about', 'About us');
INSERT INTO public.translations VALUES (33, 'en', 'nav_contact', 'Contact Us');
INSERT INTO public.translations VALUES (34, 'sv', 'nav_home', 'Hem');
INSERT INTO public.translations VALUES (35, 'sv', 'nav_order', 'Beställ');
INSERT INTO public.translations VALUES (36, 'sv', 'nav_customers', 'Våra kunder');
INSERT INTO public.translations VALUES (37, 'sv', 'nav_about', 'Om oss');
INSERT INTO public.translations VALUES (38, 'sv', 'nav_contact', 'Kontakta oss');
INSERT INTO public.translations VALUES (39, 'en', 'btn_register', 'Register');
INSERT INTO public.translations VALUES (40, 'en', 'forgot_password', 'Forgotten password?');
INSERT INTO public.translations VALUES (42, 'sv', 'forgot_password', 'Glömt lösenord?');
INSERT INTO public.translations VALUES (7, 'sv', 'label_email', 'Skriv in din epost adress');
INSERT INTO public.translations VALUES (9, 'sv', 'label_password', 'Skriv in ditt lösenord');
INSERT INTO public.translations VALUES (41, 'sv', 'btn_register', 'Registrera dig');


--
-- TOC entry 5029 (class 0 OID 16403)
-- Dependencies: 222
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'andres@test.com', '123456');


--
-- TOC entry 5040 (class 0 OID 0)
-- Dependencies: 223
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_id_seq', 22, true);


--
-- TOC entry 5041 (class 0 OID 0)
-- Dependencies: 219
-- Name: translations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.translations_id_seq', 42, true);


--
-- TOC entry 5042 (class 0 OID 0)
-- Dependencies: 221
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- TOC entry 4878 (class 2606 OID 16425)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- TOC entry 4872 (class 2606 OID 16401)
-- Name: translations translations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.translations
    ADD CONSTRAINT translations_pkey PRIMARY KEY (id);


--
-- TOC entry 4874 (class 2606 OID 16411)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4876 (class 2606 OID 16413)
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


-- Completed on 2026-04-01 18:18:39

--
-- PostgreSQL database dump complete
--

