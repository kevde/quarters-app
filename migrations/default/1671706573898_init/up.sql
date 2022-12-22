SET check_function_bodies = false;
CREATE TABLE public.beaches (
    beach text NOT NULL,
    town text NOT NULL,
    id integer NOT NULL,
    link text
);
CREATE SEQUENCE public.beaches_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.beaches_id_seq OWNED BY public.beaches.id;
ALTER TABLE ONLY public.beaches ALTER COLUMN id SET DEFAULT nextval('public.beaches_id_seq'::regclass);
ALTER TABLE ONLY public.beaches
    ADD CONSTRAINT beaches_pkey PRIMARY KEY (id);
