import '/imports/ui/materialadmin/libs/jquery-validation/dist/localization/messages_pt_BR.min.js';

Meteor.startup(function() {
  T9n.setLanguage("pt");

  var pt = {
    error: {
      accounts: {
        "Match failed": "Erro de Validação"
      }
    },
    // GENDER
    m: "Masculino",
    f: "Feminino",
    // STUDENT ROLE
    aluno: "Aluno",
    "ex-aluno": "Ex-aluno",
    // STATES
    ac: "AC",        
    al: "AL",
    am: "AM",
    ap: "AP",
    ba: "BA",
    ce: "CE",
    df: "DF",
    es: "ES",
    go: "GO",
    ma: "MA",
    mt: "MT",
    ms: "MS",
    mg: "MG",
    pa: "PA",
    pb: "PB",
    pr: "PR",
    pe: "PE",
    pi: "PI",
    rj: "RJ",
    rn: "RN",
    ro: "RO",
    rs: "RS",
    rr: "RR",
    sc: "SC",
    se: "SE",
    sp: "SP",
    to: "TO",
    //COURSES
    adm: "Administração",
    sist: "Sistemas de Informação",
    ciencbio: "Ciências Biológias",
    cienccont: "Ciêncais Contábeis",
    edfisic: "Educação Física",
    enferm: "Enfermagem",
    engprod: "Engenharia de Produção",
    farmac: "Farmácia",
    fisiot: "Fisioterapia",
    gastro: "Gastronomia",
    gpi: "Gestão de Produção Industrial",
    grh: "Gestão de Recursos Humanos",
    hist: "História",
    letr: "Letras",
    mat: "Matemática",
    med: "Medicina",
    pedag: "Pedagogia",
    psicol: "Psicologia",
    pubpr: "Publicidade e Propaganda",
    // COURSE TYPES
    grad: "Graduação",
    pos: "Pós-Graduação",
    mest: "Mestrado",
    dout: "Doutorado",
    //CATEGORIES
    admin: "Administrativo",
    atend: "Atendimento",
    comun: "Comunicação",
    criat: "Criatividade, Arte e Cultura",
    desig: "Design",
    edu: "Educação",
    eng: "Engenharia",
    "escr-trad": "Escrita e Tradução",
    facil: "Facilities",
    finan: "Finanças",
    fisc: "Fiscal e Tributária",
    "fot-audiov": "Fotografia e Audiovisual",
    jurid: "Jurídica",
    logist: "Logística e Supply Chain",
    market: "Marketing",
    pesq: "Pesquisa e Desenvolvimento",
    plan: "Planejamento e Estratégia",
    "prod-fabr": "Produção e Fabricação",
    proj: "Projetos",
    qual: "Qualidade",
    relac: "Relações Públicas",
    rh: "RH e Desenvolvimento",
    saud: "Saúde",
    serv: "Serviços",
    supr: "Suprimentos (Compras)",
    sust: "Sustentabilidade",
    tecn: "Tecnologia",
    textil: "Têxtil e Moda",
    prod: "Produtora",
    vend: "Vendas e Comercial",
    varej: "Varejo",
    outra: "Outra Categoria",
    //TYPES
    estagio: "Estágio",
    trainee: "Trainee",
    junior: "Júnior",
    pleno: "Pleno",
    senior: "Sênior",
    freelancer: "Freelancer",
    //STATUS
    expired: "Expirada",
    disabled: "Desabilitada",
    active: "Ativa"
  }

  T9n.map('pt', pt);
});
