import { ICompanyData } from '../../entities/company/types';
import { IEmployee } from '../../entities/employee/types';

const fakeCompanies: ICompanyData[] = [
  {
    id: '1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p',
    name: 'АО «Мясников Орлов»',
    employeeCount: 5,
    address: 'клх Пушкинские Горы, ш. Чкалова, д. 4 стр. 3, 429745',
  },
  {
    id: '2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q',
    name: 'ООО «Строители Региона»',
    employeeCount: 5,
    address: 'г. Москва, ул. Ленина, д. 12, 101000',
  },
  {
    id: '3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r',
    name: 'ЗАО «ТехноКомплекс»',
    employeeCount: 50,
    address: 'г. Санкт-Петербург, пр. Невский, д. 25, 191025',
  },
  {
    id: '4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s',
    name: 'ИП «Светлана Нова»',
    employeeCount: 5,
    address: 'г. Казань, ул. Баумана, д. 7, 420111',
  },
  {
    id: '5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t',
    name: 'ООО «Фабрика Здоровья»',
    employeeCount: 20,
    address: 'г. Екатеринбург, ул. Малышева, д. 40, 620075',
  },
  {
    id: '6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u',
    name: 'АО «Производство Плюс»',
    employeeCount: 15,
    address: 'г. Новосибирск, ул. Красный проспект, д. 77, 630099',
  },
  {
    id: '7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v',
    name: 'ЗАО «Мегаполис Логистика»',
    employeeCount: 30,
    address: 'г. Омск, ул. Ленина, д. 2, 644010',
  },
  {
    id: '8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w',
    name: 'ООО «Энергия Прогресса»',
    employeeCount: 40,
    address: 'г. Челябинск, пр. Ленина, д. 35, 454091',
  },
  {
    id: '9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x',
    name: 'ИП «Бизнес Инновации»',
    employeeCount: 3,
    address: 'г. Волгоград, ул. Комсомольская, д. 15, 400066',
  },
  {
    id: '0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y',
    name: 'ООО «АгроТех»',
    employeeCount: 25,
    address: 'г. Пермь, ул. Куйбышева, д. 18, 614000',
  },
  {
    id: 'ab12cd34ef56gh78ij90kl12mn34op56',
    name: 'АО «Сельхоз Продукты»',
    employeeCount: 7,
    address: 'г. Тула, ул. Оружейная, д. 5, 300041',
  },
  {
    id: 'cd34ef56gh78ij90kl12mn34op56qr78',
    name: 'ООО «Технопарк Сервис»',
    employeeCount: 45,
    address: 'г. Красноярск, ул. Мира, д. 10, 660049',
  },
  {
    id: 'ef56gh78ij90kl12mn34op56qr78st90',
    name: 'ИП «Мастер Ремонт»',
    employeeCount: 6,
    address: 'г. Уфа, ул. Ленина, д. 24, 450077',
  },
  {
    id: 'gh78ij90kl12mn34op56qr78st90uv12',
    name: 'ЗАО «СтройГарант»',
    employeeCount: 28,
    address: 'г. Нижний Новгород, пр. Гагарина, д. 15, 603006',
  },
  {
    id: 'ij90kl12mn34op56qr78st90uv12wx34',
    name: 'ООО «Бизнес Центр»',
    employeeCount: 22,
    address: 'г. Воронеж, ул. Плехановская, д. 31, 394030',
  },
  {
    id: 'kl12mn34op56qr78st90uv12wx34yz56',
    name: 'АО «ИнтерТранс»',
    employeeCount: 18,
    address: 'г. Ростов-на-Дону, пр. Соколова, д. 20, 344002',
  },
  {
    id: 'mn34op56qr78st90uv12wx34yz56ab78',
    name: 'ООО «Мебель Групп»',
    employeeCount: 37,
    address: 'г. Самара, ул. Ново-Садовая, д. 35, 443011',
  },
  {
    id: 'op56qr78st90uv12wx34yz56ab78cd90',
    name: 'ИП «Торговый Дом»',
    employeeCount: 12,
    address: 'г. Краснодар, ул. Красная, д. 50, 350000',
  },
  {
    id: 'qr78st90uv12wx34yz56ab78cd90ef12',
    name: 'ЗАО «МеталлоИнвест»',
    employeeCount: 29,
    address: 'г. Сочи, ул. Воровского, д. 8, 354000',
  },
  {
    id: 'st90uv12wx34yz56ab78cd90ef12gh34',
    name: 'ООО «СитиПарк»',
    employeeCount: 34,
    address: 'г. Ижевск, ул. Ленина, д. 22, 426000',
  },
  {
    id: 'uv12wx34yz56ab78cd90ef12gh34ij56',
    name: 'АО «ТехноТрейд»',
    employeeCount: 11,
    address: 'г. Тюмень, ул. Республики, д. 18, 625000',
  },
  {
    id: 'wx34yz56ab78cd90ef12gh34ij56kl78',
    name: 'ООО «ЭкспоСтрой»',
    employeeCount: 19,
    address: 'г. Хабаровск, ул. Муравьева-Амурского, д. 6, 680000',
  },
  {
    id: 'yz56ab78cd90ef12gh34ij56kl78mn90',
    name: 'ЗАО «ПроСервис»',
    employeeCount: 21,
    address: 'г. Владивосток, ул. Светланская, д. 10, 690000',
  },
  {
    id: 'ab78cd90ef12gh34ij56kl78mn90op12',
    name: 'ИП «Техника Комфорта»',
    employeeCount: 13,
    address: 'г. Сургут, ул. Ленина, д. 25, 628400',
  },
  {
    id: 'cd90ef12gh34ij56kl78mn90op12qr34',
    name: 'ООО «Альфа Групп»',
    employeeCount: 8,
    address: 'г. Курск, ул. Дзержинского, д. 8, 305000',
  },
  {
    id: 'ef12gh34ij56kl78mn90op12qr34st56',
    name: 'ЗАО «НефтеГазСервис»',
    employeeCount: 42,
    address: 'г. Чита, ул. Ленина, д. 1, 672000',
  },
  {
    id: 'gh34ij56kl78mn90op12qr34st56uv78',
    name: 'ООО «Сибирь Трейд»',
    employeeCount: 14,
    address: 'г. Барнаул, ул. Ленина, д. 19, 656000',
  },
  {
    id: 'ij56kl78mn90op12qr34st56uv78wx90',
    name: 'АО «Восток Строй»',
    employeeCount: 26,
    address: 'г. Иркутск, ул. Карла Маркса, д. 7, 664000',
  },
  {
    id: 'kl78mn90op12qr34st56uv78wx90yz12',
    name: 'ООО «УралЭнерго»',
    employeeCount: 16,
    address: 'г. Сыктывкар, ул. Ленина, д. 4, 167000',
  },
  {
    id: 'mn90op12qr34st56uv78wx90yz12ab34',
    name: 'ИП «АгроКомплекс»',
    employeeCount: 9,
    address: 'г. Киров, ул. Воровского, д. 5, 610000',
  },
  {
    id: 'op12qr34st56uv78wx90yz12ab34cd56',
    name: 'ЗАО «Западный Торг»',
    employeeCount: 27,
    address: 'г. Калининград, ул. Ленинский проспект, д. 3, 236000',
  },
  {
    id: 'qr34st56uv78wx90yz12ab34cd56ef78',
    name: 'ООО «Центр Инноваций»',
    employeeCount: 35,
    address: 'г. Иваново, ул. Ленина, д. 6, 153000',
  },
  {
    id: 'st56uv78wx90yz12ab34cd56ef78gh90',
    name: 'АО «СеверТех»',
    employeeCount: 24,
    address: 'г. Архангельск, ул. Ленина, д. 10, 163000',
  },
  {
    id: 'uv78wx90yz12ab34cd56ef78gh90ij12',
    name: 'ООО «ЭлектроСтрой»',
    employeeCount: 23,
    address: 'г. Якутск, ул. Ленина, д. 8, 677000',
  },
  {
    id: 'wx90yz12ab34cd56ef78gh90ij12kl34',
    name: 'ЗАО «УралЛес»',
    employeeCount: 31,
    address: 'г. Тверь, ул. Советская, д. 16, 170000',
  },
  {
    id: 'yz12ab34cd56ef78gh90ij12kl34mn56',
    name: 'ООО «Бизнес Проект»',
    employeeCount: 20,
    address: 'г. Брянск, ул. Ленина, д. 11, 241000',
  },
  {
    id: 'ab34cd56ef78gh90ij12kl34mn56op78',
    name: 'АО «ЮгТехСтрой»',
    employeeCount: 17,
    address: 'г. Орел, ул. Октябрьская, д. 14, 302000',
  },
  {
    id: 'cd56ef78gh90ij12kl34mn56op78qr90',
    name: 'ООО «СмартТех»',
    employeeCount: 12,
    address: 'г. Псков, ул. Советская, д. 9, 180000',
  },
  {
    id: 'ef78gh90ij12kl34mn56op78qr90st12',
    name: 'ЗАО «ПромИнвест»',
    employeeCount: 22,
    address: 'г. Кострома, ул. Ленина, д. 7, 156000',
  },
  {
    id: 'gh90ij12kl34mn56op78qr90st12uv34',
    name: 'ООО «ЭкспертСтрой»',
    employeeCount: 18,
    address: 'г. Курган, ул. Ленина, д. 13, 640000',
  },
  {
    id: 'ij12kl34mn56op78qr90st12uv34wx56',
    name: 'АО «СевероЗапад»',
    employeeCount: 19,
    address: 'г. Смоленск, ул. Дзержинского, д. 3, 214000',
  },
  {
    id: 'kl34mn56op78qr90st12uv34wx56yz78',
    name: 'ООО «ТрансСервис»',
    employeeCount: 15,
    address: 'г. Вологда, ул. Ленина, д. 5, 160000',
  },
  {
    id: 'mn56op78qr90st12uv34wx56yz78ab90',
    name: 'ИП «Альянс Групп»',
    employeeCount: 8,
    address: 'г. Магадан, ул. Ленина, д. 1, 685000',
  },
  {
    id: 'op78qr90st12uv34wx56yz78ab90cd12',
    name: 'ЗАО «Промышленный Альянс»',
    employeeCount: 10,
    address: 'г. Чебоксары, ул. Ленина, д. 2, 428000',
  },
  {
    id: 'qr90st12uv34wx56yz78ab90cd12ef34',
    name: 'ООО «РегионСтрой»',
    employeeCount: 32,
    address: 'г. Петрозаводск, ул. Ленина, д. 3, 185000',
  },
  {
    id: 'st12uv34wx56yz78ab90cd12ef34gh56',
    name: 'АО «ЭкоСити»',
    employeeCount: 25,
    address: 'г. Грозный, ул. Ленина, д. 4, 364000',
  },
  {
    id: 'uv34wx56yz78ab90cd12ef34gh56ij78',
    name: 'ООО «Северная Столица»',
    employeeCount: 14,
    address: 'г. Мурманск, ул. Ленина, д. 7, 183000',
  },
  {
    id: 'wx56yz78ab90cd12ef34gh56ij78kl90',
    name: 'ЗАО «УралТех»',
    employeeCount: 16,
    address: 'г. Ханты-Мансийск, ул. Ленина, д. 8, 628000',
  },
  {
    id: 'yz78ab90cd12ef34gh56ij78kl90mn12',
    name: 'ООО «ЦентрСтрой»',
    employeeCount: 21,
    address: 'г. Томск, ул. Ленина, д. 6, 634000',
  },
  {
    id: 'ab90cd12ef34gh56ij78kl90mn12op34',
    name: 'АО «ЭнергоТех»',
    employeeCount: 30,
    address: 'г. Белгород, ул. Ленина, д. 12, 308000',
  },
  {
    id: 'cd12ef34gh56ij78kl90mn12op34qr56',
    name: 'ООО «Южный Центр»',
    employeeCount: 29,
    address: 'г. Ставрополь, ул. Ленина, д. 10, 355000',
  },
  {
    id: 'ef34gh56ij78kl90mn12op34qr56st78',
    name: 'ЗАО «ВостокСервис»',
    employeeCount: 27,
    address: 'г. Кемерово, ул. Ленина, д. 5, 650000',
  },
  {
    id: 'gh56ij78kl90mn12op34qr56st78uv90',
    name: 'ООО «СмартТех»',
    employeeCount: 33,
    address: 'г. Нальчик, ул. Ленина, д. 9, 360000',
  },
  {
    id: 'ij78kl90mn12op34qr56st78uv90wx12',
    name: 'АО «ПромСервис»',
    employeeCount: 26,
    address: 'г. Калуга, ул. Ленина, д. 7, 248000',
  },
  {
    id: 'kl90mn12op34qr56st78uv90wx12yz34',
    name: 'ООО «Центр Проект»',
    employeeCount: 28,
    address: 'г. Череповец, ул. Ленина, д. 11, 162600',
  },
];

const fakeEmployees: IEmployee[] = [
  {
    id: '1',
    companyId: '1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p',
    lastName: 'Иванов',
    firstName: 'Иван',
    position: 'Директор',
  },
  {
    id: '2',
    companyId: '1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p',
    lastName: 'Петров',
    firstName: 'Петр',
    position: 'Менеджер',
  },
  {
    id: '3',
    companyId: '1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p',
    lastName: 'Сидоров',
    firstName: 'Сидор',
    position: 'Разработчик',
  },
  {
    id: '4',
    companyId: '1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p',
    lastName: 'Кузнецов',
    firstName: 'Кузьма',
    position: 'Менеджер',
  },
  {
    id: '5',
    companyId: '1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p',
    lastName: 'Васильев',
    firstName: 'Василий',
    position: 'Разработчик',
  },
  {
    id: '6',
    companyId: '2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q',
    lastName: 'Михайлов',
    firstName: 'Михаил',
    position: 'Директор',
  },
  {
    id: '7',
    companyId: '2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q',
    lastName: 'Александров',
    firstName: 'Александр',
    position: 'Менеджер',
  },
  {
    id: '8',
    companyId: '2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q',
    lastName: 'Николаев',
    firstName: 'Николай',
    position: 'Разработчик',
  },
  {
    id: '9',
    companyId: '2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q',
    lastName: 'Федоров',
    firstName: 'Федор',
    position: 'Тестировщик',
  },
  {
    id: '10',
    companyId: '2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q',
    lastName: 'Степанов',
    firstName: 'Степан',
    position: 'Аналитик',
  },
];

const numberOfPages = 10;

const getCompanies = (page: number = 0): { countCompanies: number; companies: ICompanyData[] } => {
  const startIndex = page * numberOfPages;
  const countCompanies = fakeCompanies.length;
  const companies = fakeCompanies.slice(startIndex, startIndex + numberOfPages);

  return { countCompanies, companies };
};

const getEmployees = () => {
  return fakeEmployees;
};

const FakeApiService = {
  getCompanies,
  getEmployees,
};

export default FakeApiService;
