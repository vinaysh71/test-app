import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { JournalService } from './journal.service';

describe('JournalService', () => {
  let service: JournalService;
  let mockHttp: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [JournalService]
    }).compileComponents();
    service = TestBed.inject(JournalService);
    mockHttp = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    mockHttp.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getJournals()', () => {
    const resp = { "totalHits": 11356, "limit": 10, "offset": 0, "scrollId": null, "results": [{ "identifiers": ["oai:doaj.org\/journal:b56709ee6dfa4e7d897a184ea59d7bf6", "issn:2303-2111", "issn:2354-886XXXX", "url:https:\/\/doaj.org\/toc\/2354-886X"], "language": "ID", "publisher": "OJS", "subjects": ["aquatic product technology", "fisheries", "Indonesia", "Aquaculture. Fisheries. Angling", "SH1-691"], "dataProviderId": 645, "title": "Jurnal Pengolahan Hasil Perikanan Indonesia" }, { "identifiers": ["oai:doaj.org\/journal:ff721a03545f4668a0298f3cdb5d5c59", "issn:2162-4453", "issn:2162-4461", "url:http:\/\/doaj.org\/toc\/ff721a03545f4668a0298f3cdb5d5c59"], "language": "English", "publisher": "Scientific Research Publishing", "subjects": ["ecological genetics", "epigenetics", "genetic engineering", "psychiatric genetics", "LCC:Genetics", "LCC:QH426-470", "LCC:Biology (General)", "LCC:QH301-705.5", "LCC:Science", "LCC:Q"], "dataProviderId": 645, "title": "Open Journal of Genetics" }, { "identifiers": ["oai:doaj.org\/journal:fc6f85dc44ed458b983814eb3628da53", "issn:1179-1497", "url:http:\/\/doaj.org\/toc\/fc6f85dc44ed458b983814eb3628da53"], "language": "English", "publisher": "Dove Medical Press", "subjects": ["neuropsychiatry", "behavioral complications", "HIV research", "AIDS research", "pathology", "LCC:Neurosciences. Biological psychiatry. Neuropsychiatry", "LCC:RC321-571", "LCC:Internal medicine", "LCC:RC31-1245", "LCC:Medicine", "LCC:R"], "dataProviderId": 645, "title": "Neurobehavioral HIV Medicine" }, { "identifiers": ["oai:doaj.org\/journal:b9ee102a97714c1e813c1bb176156221", "issn:2221-0741", "url:http:\/\/doaj.org\/toc\/b9ee102a97714c1e813c1bb176156221"], "language": "English", "publisher": "World of Computer Science and Information Technology Journal", "subjects": ["computer science", "information technology", "LCC:Electronic computers. Computer science", "LCC:QA75.5-76.95", "LCC:Instruments and machines", "LCC:QA71-90", "LCC:Mathematics", "LCC:QA1-939", "LCC:Science", "LCC:Q"], "dataProviderId": 645, "title": "World of Computer Science and Information Technology Journal" }, { "identifiers": ["oai:doaj.org\/journal:bd3a33f5b96848dea3bab05464b85280", "issn:1989-4376", "url:http:\/\/doaj.org\/toc\/bd3a33f5b96848dea3bab05464b85280"], "language": "English", "publisher": "Mar\u00eda-Jos\u00e9 Varela Salinas, Encarnaci\u00f3n Postigo Pinazo, et al.", "subjects": ["translating and interpreting", "translation studies", "interpretation", "LCC:Philology. Linguistics", "LCC:P1-1091", "LCC:Language and Literature", "LCC:P"], "dataProviderId": 645, "title": "Revista Electr\u00f3nica de Did\u00e1ctica de la Traducci\u00f3n y la Interpretaci\u00f3n" }, { "identifiers": ["oai:doaj.org\/journal:a40da3a1ec094c4ab2033d38ed036b66", "issn:0884-2035", "url:http:\/\/doaj.org\/toc\/a40da3a1ec094c4ab2033d38ed036b66"], "language": "English", "publisher": "University of Colorado", "subjects": ["linguistics", "LCC:Philology. Linguistics", "LCC:P1-1091", "LCC:Language and Literature", "LCC:P"], "dataProviderId": 645, "title": "Colorado Research in Linguistics" }, { "identifiers": ["oai:doaj.org\/journal:8f215ae90b144140aba3edf0e3b78f26", "issn:1925-542X", "issn:1925-5438", "url:http:\/\/doaj.org\/toc\/8f215ae90b144140aba3edf0e3b78f26"], "language": "English", "publisher": "OJS", "subjects": ["engineering", "energy sources", "natural gas", "oil and petroleum", "LCC:Chemical technology", "LCC:TP1-1185", "LCC:Technology", "LCC:T"], "dataProviderId": 645, "title": "Advances in Petroleum Exploration and Development" }, { "identifiers": ["oai:doaj.org\/journal:6aa4c9c4dc2e483e9c784eee37a47101", "issn:1792-7919", "issn:1792-7927", "url:http:\/\/doaj.org\/toc\/6aa4c9c4dc2e483e9c784eee37a47101"], "language": "English", "publisher": "Evagelismos General Hospital of Athens", "subjects": ["cardiac electrophysiology", "arrhythmias", "cardiac pacing", "cardiology", "cardiovascular disorders", "LCC:Diseases of the circulatory (Cardiovascular) system", "LCC:RC666-701", "LCC:Specialties of internal medicine", "LCC:RC581-951", "LCC:Internal medicine", "LCC:RC31-1245", "LCC:Medicine", "LCC:R"], "dataProviderId": 645, "title": "Rhythmos" }, { "identifiers": ["oai:doaj.org\/journal:0409544de1f94dfdb83df201d0d63d83", "issn:1875-0443", "url:http:\/\/doaj.org\/toc\/0409544de1f94dfdb83df201d0d63d83"], "language": "English", "publisher": "Bentham open", "subjects": ["epithelial systems", "cells", "biochemistry", "LCC:Biology (General)", "LCC:QH301-705.5", "LCC:Science", "LCC:Q"], "dataProviderId": 645, "title": "Journal of Epithelial Biology \u0026 Pharmacology" }, { "identifiers": ["oai:doaj.org\/journal:f674bc1643e04f628fb921c747af3752", "issn:1453-1305", "issn:1842-8088", "url:https:\/\/doaj.org\/toc\/1842-8088"], "language": "Romanian", "publisher": "Inforec Association", "subjects": ["economic informatics", "information society", "information systems", "IT", "Computer engineering. Computer hardware", "TK7885-7895", "Electronics", "TK7800-8360", "Electrical engineering. Electronics. Nuclear engineering", "TK1-9971", "Technology", "T", "Bibliography. Library science. Information resources", "Z"], "dataProviderId": 645, "title": "Informatica Economica Journal" }], "tooks": null, "esTook": null }

    service.getJournals().subscribe(posts => {
      console.log('resp for test cases ===========', posts[0]);
      expect(posts.length).toEqual(10);
    });
    const request = mockHttp.expectOne(`https://api.core.ac.uk/v3/search/journals/`);
    expect(request.request.method).toBe('GET');
    request.flush(resp);
  })
});
