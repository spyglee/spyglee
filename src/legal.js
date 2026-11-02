// Ledger legal documents. Each section body is a list of blocks: a string is a
// paragraph, an array of strings is a bulleted list.
export const legal = {
  en: {
    back: 'Ledger',
    updatedLabel: 'Last updated',
    updated: '2 November 2026',
    privacy: {
      title: 'Privacy Policy',
      description: 'How Ledger handles your information: your financial data stays on your device, with no account and no server.',
      intro:
        'This policy explains how Ledger, the personal finance app made by spyglee, handles your information. In short: Ledger keeps your financial data on your device. There is no account, no server holding your records, and we cannot see what you enter.',
      sections: [
        {
          title: 'Who we are',
          body: [
            'Ledger is developed and published by spyglee (“we”, “us”). For anything about this policy or your data, write to hello@spyglee.work.',
          ],
        },
        {
          title: 'Data that stays on your device',
          body: [
            'Everything you enter or create in Ledger is stored locally on your device, including:',
            [
              'accounts, transactions, transfers, categories, and collections;',
              'budgets and planned or recurring payments;',
              'receipt photos and the merchant, date, total, and items read from them;',
              'price history and personal inflation figures;',
              'app settings.',
            ],
            'This data is not sent to spyglee or to anyone else, and we have no copy of it.',
          ],
        },
        {
          title: 'Receipt scanning',
          body: [
            'When you photograph a receipt or share a photo into Ledger, text recognition runs on your device. The image and the text read from it are not uploaded anywhere for processing.',
          ],
        },
        {
          title: 'Device permissions',
          body: [
            'Ledger asks only for the permissions it needs, and only when you use the related feature:',
            [
              'Camera — to photograph receipts when you choose to.',
              'Photos — to read only the photos you pick or share into Ledger.',
              'Notifications — to tell you when spending reaches a budget limit or a planned payment is due. These are scheduled on the device.',
              'Face ID, Touch ID, or fingerprint — to unlock Ledger, if you turn this on. The check is done by the operating system; Ledger only learns whether it succeeded and never receives your biometric data.',
            ],
            'You can withdraw any permission at any time in your device settings.',
          ],
        },
        {
          title: 'Import and export',
          body: [
            'When you import or export a CSV file, Ledger reads or writes only the file you choose. Once you save or share an exported file — for example to a cloud drive, by email, or to another app — that copy is handled by the service you chose, under its own privacy policy.',
          ],
        },
        {
          title: 'Device backups',
          body: [
            'Depending on your settings, your device may include Ledger’s data in its own backups, such as iCloud Backup or Android backup. Those backups are controlled by you and by Apple or Google, not by spyglee.',
          ],
        },
        {
          title: 'What we do not do',
          body: [
            [
              'We do not require an account or sign-in.',
              'We do not show ads or use advertising trackers.',
              'We do not sell, rent, or share your data.',
              'We do not build profiles about you.',
            ],
          ],
        },
        {
          title: 'App stores',
          body: [
            'Ledger is distributed through the Apple App Store and Google Play. Apple and Google process information about your download and purchases and, if you allow it, crash reports and usage statistics, under their own privacy policies. They may give us aggregated, anonymous statistics, such as download counts, that do not identify you.',
          ],
        },
        {
          title: 'If you contact us',
          body: [
            'If you email us, we receive your email address and whatever you choose to write. We use it only to reply and keep it only as long as the conversation needs. Please do not send us your financial records.',
          ],
        },
        {
          title: 'Your rights',
          body: [
            'Because your Ledger data stays on your device, you control it directly: you can view, change, export, or delete it in the app at any time. Deleting the app removes its data from the device, apart from any backups or exported copies you keep.',
            'If you are in the European Economic Area, the United Kingdom, or another place with similar laws, you have the right to access, correct, delete, restrict, or object to the processing of personal data we hold about you, and to lodge a complaint with your data protection authority. In practice, the only personal data we may hold is email correspondence with you.',
          ],
        },
        {
          title: 'Children',
          body: ['Ledger is not directed at children under 16, and we do not knowingly collect information from them.'],
        },
        {
          title: 'Changes to this policy',
          body: [
            'If we change this policy, we will update the date at the top of this page. If a change meaningfully affects how your data is handled, we will also point it out in the app or in the release notes.',
          ],
        },
        {
          title: 'Contact',
          body: ['Questions about privacy: hello@spyglee.work.'],
        },
      ],
    },
    terms: {
      title: 'Terms of Use',
      description: 'The terms that apply when you download and use Ledger, the personal finance app by spyglee.',
      intro:
        'These terms govern your use of Ledger, the personal finance app made by spyglee. By downloading or using Ledger, you agree to them. If you do not agree, please do not use the app.',
      sections: [
        {
          title: 'The app and your licence',
          body: [
            'Ledger helps you record income and expenses, set budgets, plan payments, scan receipts, and follow the prices of things you buy, all on your device. We grant you a personal, non-exclusive, non-transferable licence to use Ledger on devices you own or control, under these terms and the rules of the app store you downloaded it from.',
          ],
        },
        {
          title: 'Not financial advice',
          body: [
            'Ledger is a record-keeping tool. Budgets, statistics, price histories, and personal inflation figures are calculated from the data you enter and the receipts you scan, and are only as accurate as that data. Nothing in Ledger is financial, tax, investment, or legal advice. Check important figures yourself and talk to a qualified professional before making financial decisions.',
          ],
        },
        {
          title: 'Receipt recognition',
          body: [
            'Receipt scanning uses automatic text recognition and can misread amounts, dates, merchants, or items. Review what Ledger reads before you rely on it.',
          ],
        },
        {
          title: 'Your data and backups',
          body: [
            'Your data is stored only on your device, and spyglee has no copy of it. If you lose or reset your device or delete the app, your data may be lost unless you have a device backup or an exported CSV file. You are responsible for keeping your own copies. How information is handled is described in the Privacy Policy.',
          ],
        },
        {
          title: 'Acceptable use',
          body: [
            'You agree not to:',
            [
              'copy, modify, distribute, sell, or lease any part of Ledger;',
              'reverse engineer the app or try to extract its source code, except where the law allows it;',
              'use the app for anything unlawful.',
            ],
          ],
        },
        {
          title: 'Purchases',
          body: [
            'If Ledger offers paid features or subscriptions, they are bought through the Apple App Store or Google Play. Payment, renewals, cancellation, and refunds are handled by the store under its own terms. You can manage or cancel subscriptions in your store account settings.',
          ],
        },
        {
          title: 'Intellectual property',
          body: [
            'Ledger, including its design, code, name, and logo, belongs to spyglee or its licensors. These terms give you no rights to them beyond using the app as described here. The data you enter remains yours.',
          ],
        },
        {
          title: 'Updates and availability',
          body: [
            'We may update Ledger to add, change, or remove features, fix problems, or meet legal and platform requirements, and we may stop offering the app. We do not promise that Ledger will always be available, free of errors, or compatible with every device.',
          ],
        },
        {
          title: 'Disclaimer',
          body: [
            'Ledger is provided “as is” and “as available”. To the extent the law allows, we disclaim all warranties, express or implied, including fitness for a particular purpose and non-infringement.',
          ],
        },
        {
          title: 'Limitation of liability',
          body: [
            'To the extent the law allows, spyglee is not liable for indirect, incidental, or consequential losses, or for loss of data, profits, or savings, arising from your use of Ledger or your inability to use it. Nothing in these terms limits liability that cannot be limited by law or affects your statutory rights as a consumer.',
          ],
        },
        {
          title: 'Apple App Store',
          body: [
            'If you downloaded Ledger from the App Store, these terms are between you and spyglee, not Apple. Apple is not responsible for the app or its content, has no obligation to provide maintenance or support, and is not responsible for addressing any claims relating to the app. If the app fails to conform to an applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any; Apple has no other warranty obligation. Apple and its subsidiaries are third-party beneficiaries of these terms and may enforce them against you. Your use must also follow the App Store Usage Rules. If you downloaded Ledger from Google Play, the Google Play Terms of Service also apply.',
          ],
        },
        {
          title: 'Ending these terms',
          body: [
            'You can stop using Ledger at any time by deleting it. If you break these terms, your right to use the app ends automatically.',
          ],
        },
        {
          title: 'Changes to these terms',
          body: [
            'We may update these terms. The date at the top of this page shows the current version. Continuing to use Ledger after a change means you accept the updated terms.',
          ],
        },
        {
          title: 'Governing law',
          body: [
            'These terms are governed by the laws of the country where spyglee is established. If you are a consumer, you keep the protection of the mandatory laws of the country where you live and may bring claims in your local courts.',
          ],
        },
        {
          title: 'Contact',
          body: ['Questions about these terms: hello@spyglee.work.'],
        },
      ],
    },
  },

  pl: {
    back: 'Ledger',
    updatedLabel: 'Ostatnia aktualizacja',
    updated: '2 listopada 2026',
    privacy: {
      title: 'Polityka prywatności',
      description: 'Jak Ledger traktuje Twoje informacje: dane finansowe zostają na Twoim urządzeniu, bez konta i bez serwera.',
      intro:
        'Ta polityka wyjaśnia, jak Ledger, aplikacja do finansów osobistych stworzona przez spyglee, traktuje Twoje informacje. W skrócie: Ledger przechowuje Twoje dane finansowe na Twoim urządzeniu. Nie ma konta ani serwera z Twoimi zapisami i nie widzimy tego, co wprowadzasz.',
      sections: [
        {
          title: 'Kim jesteśmy',
          body: [
            'Ledger jest tworzony i publikowany przez spyglee („my”). W sprawach dotyczących tej polityki lub Twoich danych napisz na hello@spyglee.work.',
          ],
        },
        {
          title: 'Dane, które zostają na urządzeniu',
          body: [
            'Wszystko, co wprowadzasz lub tworzysz w Ledgerze, jest przechowywane lokalnie na Twoim urządzeniu, w tym:',
            [
              'konta, transakcje, przelewy, kategorie i kolekcje;',
              'budżety oraz planowane i cykliczne płatności;',
              'zdjęcia paragonów oraz odczytany z nich sklep, data, suma i pozycje;',
              'historia cen i wskaźniki inflacji osobistej;',
              'ustawienia aplikacji.',
            ],
            'Te dane nie są wysyłane do spyglee ani do nikogo innego i nie mamy ich kopii.',
          ],
        },
        {
          title: 'Skanowanie paragonów',
          body: [
            'Gdy fotografujesz paragon lub udostępniasz zdjęcie do Ledgera, rozpoznawanie tekstu odbywa się na Twoim urządzeniu. Obraz i odczytany z niego tekst nie są nigdzie przesyłane do przetworzenia.',
          ],
        },
        {
          title: 'Uprawnienia urządzenia',
          body: [
            'Ledger prosi tylko o potrzebne uprawnienia i tylko wtedy, gdy korzystasz z danej funkcji:',
            [
              'Aparat — aby fotografować paragony, gdy tego chcesz.',
              'Zdjęcia — aby odczytać wyłącznie zdjęcia, które wybierzesz lub udostępnisz do Ledgera.',
              'Powiadomienia — aby poinformować Cię, gdy wydatki osiągną limit budżetu lub nadejdzie termin planowanej płatności. Są planowane na urządzeniu.',
              'Face ID, Touch ID lub odcisk palca — aby odblokować Ledgera, jeśli włączysz tę opcję. Weryfikację wykonuje system operacyjny; Ledger dowiaduje się tylko, czy się powiodła, i nigdy nie otrzymuje Twoich danych biometrycznych.',
            ],
            'Każde uprawnienie możesz w dowolnej chwili cofnąć w ustawieniach urządzenia.',
          ],
        },
        {
          title: 'Import i eksport',
          body: [
            'Podczas importu lub eksportu pliku CSV Ledger odczytuje lub zapisuje tylko wybrany przez Ciebie plik. Gdy zapiszesz lub udostępnisz wyeksportowany plik — na przykład na dysk w chmurze, e-mailem lub do innej aplikacji — ta kopia podlega usłudze, którą wybrałeś, i jej polityce prywatności.',
          ],
        },
        {
          title: 'Kopie zapasowe urządzenia',
          body: [
            'W zależności od ustawień Twoje urządzenie może uwzględniać dane Ledgera we własnych kopiach zapasowych, takich jak kopia iCloud lub kopia zapasowa Androida. Te kopie kontrolujesz Ty oraz Apple lub Google, a nie spyglee.',
          ],
        },
        {
          title: 'Czego nie robimy',
          body: [
            [
              'Nie wymagamy konta ani logowania.',
              'Nie wyświetlamy reklam i nie używamy trackerów reklamowych.',
              'Nie sprzedajemy, nie wynajmujemy i nie udostępniamy Twoich danych.',
              'Nie tworzymy Twojego profilu.',
            ],
          ],
        },
        {
          title: 'Sklepy z aplikacjami',
          body: [
            'Ledger jest dystrybuowany przez Apple App Store i Google Play. Apple i Google przetwarzają informacje o pobraniu i zakupach, a jeśli na to pozwolisz, także raporty o awariach i statystyki użycia, zgodnie z własnymi politykami prywatności. Mogą przekazywać nam zbiorcze, anonimowe statystyki, na przykład liczbę pobrań, które Cię nie identyfikują.',
          ],
        },
        {
          title: 'Kontakt z nami',
          body: [
            'Jeśli napiszesz do nas e-mail, otrzymamy Twój adres e-mail i to, co zdecydujesz się napisać. Używamy tego wyłącznie, aby odpowiedzieć, i przechowujemy tylko tak długo, jak wymaga tego rozmowa. Prosimy, nie wysyłaj nam swoich zapisów finansowych.',
          ],
        },
        {
          title: 'Twoje prawa',
          body: [
            'Ponieważ dane Ledgera zostają na Twoim urządzeniu, kontrolujesz je bezpośrednio: w każdej chwili możesz je przeglądać, zmieniać, eksportować lub usuwać w aplikacji. Usunięcie aplikacji usuwa jej dane z urządzenia, z wyjątkiem zachowanych kopii zapasowych lub wyeksportowanych plików.',
            'Jeśli przebywasz w Europejskim Obszarze Gospodarczym, Wielkiej Brytanii lub innym miejscu z podobnymi przepisami, masz prawo dostępu do danych osobowych, które o Tobie przechowujemy, ich sprostowania, usunięcia, ograniczenia przetwarzania lub wniesienia sprzeciwu, a także prawo złożenia skargi do organu ochrony danych (w Polsce — Prezesa UODO). W praktyce jedynymi danymi osobowymi, które możemy posiadać, jest korespondencja e-mail z Tobą.',
          ],
        },
        {
          title: 'Dzieci',
          body: ['Ledger nie jest skierowany do dzieci poniżej 16 roku życia i świadomie nie zbieramy od nich informacji.'],
        },
        {
          title: 'Zmiany tej polityki',
          body: [
            'Jeśli zmienimy tę politykę, zaktualizujemy datę na górze tej strony. Jeśli zmiana istotnie wpływa na sposób traktowania Twoich danych, wskażemy ją również w aplikacji lub w informacjach o wydaniu.',
          ],
        },
        {
          title: 'Kontakt',
          body: ['Pytania dotyczące prywatności: hello@spyglee.work.'],
        },
      ],
    },
    terms: {
      title: 'Warunki korzystania',
      description: 'Warunki obowiązujące przy pobieraniu i korzystaniu z Ledgera, aplikacji do finansów osobistych od spyglee.',
      intro:
        'Te warunki regulują korzystanie z Ledgera, aplikacji do finansów osobistych stworzonej przez spyglee. Pobierając lub używając Ledgera, akceptujesz je. Jeśli się z nimi nie zgadzasz, nie korzystaj z aplikacji.',
      sections: [
        {
          title: 'Aplikacja i licencja',
          body: [
            'Ledger pomaga zapisywać przychody i wydatki, ustalać budżety, planować płatności, skanować paragony i śledzić ceny kupowanych rzeczy — wszystko na Twoim urządzeniu. Udzielamy Ci osobistej, niewyłącznej i niezbywalnej licencji na korzystanie z Ledgera na urządzeniach, które posiadasz lub kontrolujesz, zgodnie z tymi warunkami i zasadami sklepu, z którego go pobrałeś.',
          ],
        },
        {
          title: 'To nie jest porada finansowa',
          body: [
            'Ledger jest narzędziem do prowadzenia zapisów. Budżety, statystyki, historie cen i wskaźniki inflacji osobistej są obliczane na podstawie wprowadzonych danych i zeskanowanych paragonów i są tak dokładne, jak te dane. Nic w Ledgerze nie stanowi porady finansowej, podatkowej, inwestycyjnej ani prawnej. Sprawdzaj ważne liczby samodzielnie i skonsultuj się z wykwalifikowanym specjalistą przed podjęciem decyzji finansowych.',
          ],
        },
        {
          title: 'Rozpoznawanie paragonów',
          body: [
            'Skanowanie paragonów korzysta z automatycznego rozpoznawania tekstu i może błędnie odczytać kwoty, daty, sklepy lub pozycje. Sprawdź, co odczytał Ledger, zanim na tym polegasz.',
          ],
        },
        {
          title: 'Twoje dane i kopie zapasowe',
          body: [
            'Twoje dane są przechowywane wyłącznie na Twoim urządzeniu, a spyglee nie ma ich kopii. Jeśli zgubisz lub zresetujesz urządzenie albo usuniesz aplikację, dane mogą zostać utracone, chyba że masz kopię zapasową urządzenia lub wyeksportowany plik CSV. Odpowiadasz za przechowywanie własnych kopii. Sposób traktowania informacji opisuje Polityka prywatności.',
          ],
        },
        {
          title: 'Dozwolone korzystanie',
          body: [
            'Zobowiązujesz się nie:',
            [
              'kopiować, modyfikować, rozpowszechniać, sprzedawać ani wynajmować żadnej części Ledgera;',
              'poddawać aplikacji inżynierii wstecznej ani próbować wydobyć jej kodu źródłowego, z wyjątkiem sytuacji dozwolonych przez prawo;',
              'używać aplikacji w sposób niezgodny z prawem.',
            ],
          ],
        },
        {
          title: 'Zakupy',
          body: [
            'Jeśli Ledger oferuje płatne funkcje lub subskrypcje, kupuje się je przez Apple App Store lub Google Play. Płatności, odnowienia, anulowanie i zwroty obsługuje sklep na własnych warunkach. Subskrypcjami możesz zarządzać lub je anulować w ustawieniach konta w sklepie.',
          ],
        },
        {
          title: 'Własność intelektualna',
          body: [
            'Ledger, w tym jego projekt, kod, nazwa i logo, należy do spyglee lub jego licencjodawców. Te warunki nie dają Ci do nich żadnych praw poza korzystaniem z aplikacji w opisany sposób. Wprowadzone przez Ciebie dane pozostają Twoje.',
          ],
        },
        {
          title: 'Aktualizacje i dostępność',
          body: [
            'Możemy aktualizować Ledgera, aby dodawać, zmieniać lub usuwać funkcje, naprawiać problemy lub spełniać wymogi prawne i platform, a także możemy zaprzestać oferowania aplikacji. Nie gwarantujemy, że Ledger będzie zawsze dostępny, wolny od błędów ani zgodny z każdym urządzeniem.',
          ],
        },
        {
          title: 'Wyłączenie gwarancji',
          body: [
            'Ledger jest udostępniany „w stanie, w jakim jest” i „w miarę dostępności”. W zakresie dozwolonym przez prawo wyłączamy wszelkie gwarancje, wyraźne lub dorozumiane, w tym przydatności do określonego celu i nienaruszania praw osób trzecich.',
          ],
        },
        {
          title: 'Ograniczenie odpowiedzialności',
          body: [
            'W zakresie dozwolonym przez prawo spyglee nie odpowiada za szkody pośrednie, przypadkowe lub wynikowe ani za utratę danych, zysków lub oszczędności wynikającą z korzystania z Ledgera lub niemożności korzystania z niego. Nic w tych warunkach nie ogranicza odpowiedzialności, której prawo nie pozwala ograniczyć, ani nie narusza Twoich ustawowych praw konsumenta.',
          ],
        },
        {
          title: 'Apple App Store',
          body: [
            'Jeśli pobrałeś Ledgera z App Store, te warunki obowiązują między Tobą a spyglee, a nie Apple. Apple nie odpowiada za aplikację ani jej treść, nie ma obowiązku zapewniania konserwacji ani wsparcia i nie odpowiada za rozpatrywanie roszczeń związanych z aplikacją. Jeśli aplikacja nie spełnia obowiązującej gwarancji, możesz powiadomić Apple, a Apple zwróci cenę zakupu, jeśli została zapłacona; Apple nie ma innych zobowiązań gwarancyjnych. Apple i jego spółki zależne są beneficjentami tych warunków i mogą je wobec Ciebie egzekwować. Korzystanie musi też być zgodne z zasadami użytkowania App Store. Jeśli pobrałeś Ledgera z Google Play, obowiązują również Warunki korzystania z usługi Google Play.',
          ],
        },
        {
          title: 'Zakończenie',
          body: [
            'Możesz w każdej chwili przestać korzystać z Ledgera, usuwając go. Jeśli naruszysz te warunki, Twoje prawo do korzystania z aplikacji wygasa automatycznie.',
          ],
        },
        {
          title: 'Zmiany warunków',
          body: [
            'Możemy aktualizować te warunki. Data na górze tej strony wskazuje aktualną wersję. Dalsze korzystanie z Ledgera po zmianie oznacza akceptację zaktualizowanych warunków.',
          ],
        },
        {
          title: 'Prawo właściwe',
          body: [
            'Te warunki podlegają prawu kraju, w którym spyglee ma siedzibę. Jeśli jesteś konsumentem, zachowujesz ochronę bezwzględnie obowiązujących przepisów kraju swojego zamieszkania i możesz dochodzić roszczeń przed sądami właściwymi dla swojego miejsca zamieszkania.',
          ],
        },
        {
          title: 'Kontakt',
          body: ['Pytania dotyczące tych warunków: hello@spyglee.work.'],
        },
      ],
    },
  },

  hr: {
    back: 'Ledger',
    updatedLabel: 'Zadnje ažuriranje',
    updated: '2. studenoga 2026.',
    privacy: {
      title: 'Pravila privatnosti',
      description: 'Kako Ledger postupa s vašim podacima: financijski podaci ostaju na vašem uređaju, bez računa i bez poslužitelja.',
      intro:
        'Ova pravila objašnjavaju kako Ledger, aplikacija za osobne financije tvrtke spyglee, postupa s vašim podacima. Ukratko: Ledger čuva vaše financijske podatke na vašem uređaju. Nema korisničkog računa ni poslužitelja s vašim zapisima, a mi ne vidimo što unosite.',
      sections: [
        {
          title: 'Tko smo',
          body: [
            'Ledger razvija i objavljuje spyglee („mi”). Za sva pitanja o ovim pravilima ili vašim podacima pišite na hello@spyglee.work.',
          ],
        },
        {
          title: 'Podaci koji ostaju na uređaju',
          body: [
            'Sve što unesete ili izradite u Ledgeru pohranjuje se lokalno na vašem uređaju, uključujući:',
            [
              'račune, transakcije, prijenose, kategorije i kolekcije;',
              'budžete te planirana i ponavljajuća plaćanja;',
              'fotografije računa te trgovca, datum, iznos i stavke očitane s njih;',
              'povijest cijena i pokazatelje osobne inflacije;',
              'postavke aplikacije.',
            ],
            'Ti se podaci ne šalju tvrtki spyglee niti bilo kome drugome i nemamo njihovu kopiju.',
          ],
        },
        {
          title: 'Skeniranje računa',
          body: [
            'Kada fotografirate račun ili podijelite fotografiju u Ledger, prepoznavanje teksta odvija se na vašem uređaju. Slika i očitani tekst ne šalju se nikamo na obradu.',
          ],
        },
        {
          title: 'Dopuštenja uređaja',
          body: [
            'Ledger traži samo dopuštenja koja su mu potrebna i samo kada koristite povezanu značajku:',
            [
              'Kamera — za fotografiranje računa kada to odlučite.',
              'Fotografije — za čitanje samo onih fotografija koje odaberete ili podijelite u Ledger.',
              'Obavijesti — da vas obavijesti kada potrošnja dosegne granicu budžeta ili kada dospije planirano plaćanje. Zakazuju se na uređaju.',
              'Face ID, Touch ID ili otisak prsta — za otključavanje Ledgera, ako to uključite. Provjeru obavlja operativni sustav; Ledger saznaje samo je li uspjela i nikada ne prima vaše biometrijske podatke.',
            ],
            'Svako dopuštenje možete u bilo kojem trenutku povući u postavkama uređaja.',
          ],
        },
        {
          title: 'Uvoz i izvoz',
          body: [
            'Pri uvozu ili izvozu CSV datoteke Ledger čita ili zapisuje samo datoteku koju odaberete. Kada izvezenu datoteku spremite ili podijelite — primjerice na disk u oblaku, e-poštom ili u drugu aplikaciju — tom kopijom upravlja usluga koju ste odabrali, prema vlastitim pravilima privatnosti.',
          ],
        },
        {
          title: 'Sigurnosne kopije uređaja',
          body: [
            'Ovisno o postavkama, vaš uređaj može uključiti podatke Ledgera u vlastite sigurnosne kopije, poput iCloud sigurnosne kopije ili sigurnosne kopije Androida. Tim kopijama upravljate vi te Apple ili Google, a ne spyglee.',
          ],
        },
        {
          title: 'Što ne radimo',
          body: [
            [
              'Ne tražimo korisnički račun ni prijavu.',
              'Ne prikazujemo oglase i ne koristimo oglasne alate za praćenje.',
              'Ne prodajemo, ne iznajmljujemo i ne dijelimo vaše podatke.',
              'Ne izrađujemo vaš profil.',
            ],
          ],
        },
        {
          title: 'Trgovine aplikacijama',
          body: [
            'Ledger se distribuira putem trgovina Apple App Store i Google Play. Apple i Google obrađuju podatke o preuzimanju i kupnjama te, ako to dopustite, izvješća o rušenju i statistiku korištenja, prema vlastitim pravilima privatnosti. Mogu nam dostaviti zbirne, anonimne statistike, poput broja preuzimanja, koje vas ne identificiraju.',
          ],
        },
        {
          title: 'Ako nas kontaktirate',
          body: [
            'Ako nam pošaljete e-poruku, primamo vašu adresu e-pošte i ono što odlučite napisati. Koristimo to samo za odgovor i čuvamo samo onoliko dugo koliko je razgovoru potrebno. Molimo vas da nam ne šaljete svoje financijske zapise.',
          ],
        },
        {
          title: 'Vaša prava',
          body: [
            'Budući da podaci Ledgera ostaju na vašem uređaju, njima upravljate izravno: u aplikaciji ih u svakom trenutku možete pregledati, mijenjati, izvesti ili izbrisati. Brisanje aplikacije uklanja njezine podatke s uređaja, osim sigurnosnih kopija ili izvezenih datoteka koje zadržite.',
            'Ako se nalazite u Europskom gospodarskom prostoru, Ujedinjenom Kraljevstvu ili drugdje sa sličnim propisima, imate pravo na pristup osobnim podacima koje o vama čuvamo, njihov ispravak, brisanje, ograničenje obrade ili prigovor na obradu, kao i pravo podnijeti pritužbu nadzornom tijelu za zaštitu podataka (u Hrvatskoj — AZOP). U praksi su jedini osobni podaci koje možemo imati naša korespondencija e-poštom s vama.',
          ],
        },
        {
          title: 'Djeca',
          body: ['Ledger nije namijenjen djeci mlađoj od 16 godina i svjesno ne prikupljamo podatke od njih.'],
        },
        {
          title: 'Izmjene ovih pravila',
          body: [
            'Ako izmijenimo ova pravila, ažurirat ćemo datum na vrhu ove stranice. Ako izmjena značajno utječe na postupanje s vašim podacima, istaknut ćemo je i u aplikaciji ili u bilješkama uz izdanje.',
          ],
        },
        {
          title: 'Kontakt',
          body: ['Pitanja o privatnosti: hello@spyglee.work.'],
        },
      ],
    },
    terms: {
      title: 'Uvjeti korištenja',
      description: 'Uvjeti koji vrijede kada preuzmete i koristite Ledger, aplikaciju za osobne financije tvrtke spyglee.',
      intro:
        'Ovi uvjeti uređuju vaše korištenje Ledgera, aplikacije za osobne financije tvrtke spyglee. Preuzimanjem ili korištenjem Ledgera prihvaćate ih. Ako se ne slažete, nemojte koristiti aplikaciju.',
      sections: [
        {
          title: 'Aplikacija i licencija',
          body: [
            'Ledger vam pomaže bilježiti prihode i rashode, postavljati budžete, planirati plaćanja, skenirati račune i pratiti cijene stvari koje kupujete — sve na vašem uređaju. Dajemo vam osobnu, neisključivu i neprenosivu licenciju za korištenje Ledgera na uređajima koje posjedujete ili kontrolirate, u skladu s ovim uvjetima i pravilima trgovine iz koje ste ga preuzeli.',
          ],
        },
        {
          title: 'Nije financijski savjet',
          body: [
            'Ledger je alat za vođenje evidencije. Budžeti, statistike, povijest cijena i pokazatelji osobne inflacije izračunavaju se iz podataka koje unesete i računa koje skenirate te su točni samo onoliko koliko su točni ti podaci. Ništa u Ledgeru nije financijski, porezni, investicijski ili pravni savjet. Važne brojke provjerite sami i posavjetujte se s kvalificiranim stručnjakom prije financijskih odluka.',
          ],
        },
        {
          title: 'Prepoznavanje računa',
          body: [
            'Skeniranje računa koristi automatsko prepoznavanje teksta i može pogrešno očitati iznose, datume, trgovce ili stavke. Provjerite što je Ledger očitao prije nego što se na to oslonite.',
          ],
        },
        {
          title: 'Vaši podaci i sigurnosne kopije',
          body: [
            'Vaši podaci pohranjeni su samo na vašem uređaju i spyglee nema njihovu kopiju. Ako izgubite ili resetirate uređaj ili izbrišete aplikaciju, podaci se mogu izgubiti, osim ako imate sigurnosnu kopiju uređaja ili izvezenu CSV datoteku. Vi ste odgovorni za čuvanje vlastitih kopija. Postupanje s podacima opisano je u Pravilima privatnosti.',
          ],
        },
        {
          title: 'Dopušteno korištenje',
          body: [
            'Obvezujete se da nećete:',
            [
              'kopirati, mijenjati, distribuirati, prodavati ili iznajmljivati bilo koji dio Ledgera;',
              'obrnuto inženjerirati aplikaciju ili pokušavati izvući njezin izvorni kod, osim ako to zakon dopušta;',
              'koristiti aplikaciju za bilo što nezakonito.',
            ],
          ],
        },
        {
          title: 'Kupnje',
          body: [
            'Ako Ledger nudi plaćene značajke ili pretplate, one se kupuju putem trgovine Apple App Store ili Google Play. Plaćanje, obnove, otkazivanje i povrate obrađuje trgovina prema vlastitim uvjetima. Pretplatama možete upravljati ili ih otkazati u postavkama računa u trgovini.',
          ],
        },
        {
          title: 'Intelektualno vlasništvo',
          body: [
            'Ledger, uključujući njegov dizajn, kod, naziv i logotip, pripada tvrtki spyglee ili njezinim davateljima licencije. Ovi vam uvjeti ne daju nikakva prava na njih osim korištenja aplikacije kako je ovdje opisano. Podaci koje unesete ostaju vaši.',
          ],
        },
        {
          title: 'Ažuriranja i dostupnost',
          body: [
            'Ledger možemo ažurirati kako bismo dodali, izmijenili ili uklonili značajke, otklonili probleme ili ispunili zakonske zahtjeve i zahtjeve platformi, a možemo i prestati nuditi aplikaciju. Ne jamčimo da će Ledger uvijek biti dostupan, bez pogrešaka ili kompatibilan sa svakim uređajem.',
          ],
        },
        {
          title: 'Odricanje od jamstva',
          body: [
            'Ledger se pruža „takav kakav jest” i „kako je dostupan”. U mjeri u kojoj to zakon dopušta, odričemo se svih jamstava, izričitih ili prešutnih, uključujući prikladnost za određenu svrhu i nepovređivanje prava trećih.',
          ],
        },
        {
          title: 'Ograničenje odgovornosti',
          body: [
            'U mjeri u kojoj to zakon dopušta, spyglee ne odgovara za neizravnu, slučajnu ili posljedičnu štetu niti za gubitak podataka, dobiti ili ušteđevine koji proizlaze iz korištenja Ledgera ili nemogućnosti njegova korištenja. Ništa u ovim uvjetima ne ograničava odgovornost koja se zakonom ne može ograničiti niti utječe na vaša zakonska prava potrošača.',
          ],
        },
        {
          title: 'Apple App Store',
          body: [
            'Ako ste Ledger preuzeli iz trgovine App Store, ovi uvjeti vrijede između vas i tvrtke spyglee, a ne Applea. Apple nije odgovoran za aplikaciju ni njezin sadržaj, nema obvezu pružanja održavanja ili podrške i nije odgovoran za rješavanje zahtjeva povezanih s aplikacijom. Ako aplikacija ne ispunjava primjenjivo jamstvo, možete obavijestiti Apple, a Apple će vratiti kupovnu cijenu, ako je plaćena; Apple nema drugih jamstvenih obveza. Apple i njegova povezana društva korisnici su ovih uvjeta kao treće strane i mogu ih provoditi prema vama. Korištenje mora biti u skladu i s pravilima korištenja trgovine App Store. Ako ste Ledger preuzeli s Google Playa, primjenjuju se i Uvjeti pružanja usluge za Google Play.',
          ],
        },
        {
          title: 'Prestanak',
          body: [
            'Ledger možete prestati koristiti u bilo kojem trenutku tako da ga izbrišete. Ako prekršite ove uvjete, vaše pravo na korištenje aplikacije automatski prestaje.',
          ],
        },
        {
          title: 'Izmjene uvjeta',
          body: [
            'Ove uvjete možemo ažurirati. Datum na vrhu ove stranice označava važeću verziju. Nastavak korištenja Ledgera nakon izmjene znači da prihvaćate ažurirane uvjete.',
          ],
        },
        {
          title: 'Mjerodavno pravo',
          body: [
            'Na ove uvjete primjenjuje se pravo zemlje u kojoj spyglee ima sjedište. Ako ste potrošač, zadržavate zaštitu prisilnih propisa zemlje u kojoj živite i zahtjeve možete podnijeti pred sudovima prema svojem prebivalištu.',
          ],
        },
        {
          title: 'Kontakt',
          body: ['Pitanja o ovim uvjetima: hello@spyglee.work.'],
        },
      ],
    },
  },

  uk: {
    back: 'Ledger',
    updatedLabel: 'Останнє оновлення',
    updated: '2 листопада 2026 р.',
    privacy: {
      title: 'Політика конфіденційності',
      description: 'Як Ledger поводиться з вашою інформацією: фінансові дані залишаються на вашому пристрої, без облікового запису й без сервера.',
      intro:
        'Ця політика пояснює, як Ledger, застосунок для особистих фінансів від spyglee, поводиться з вашою інформацією. Коротко: Ledger зберігає ваші фінансові дані на вашому пристрої. Немає облікового запису чи сервера з вашими записами, і ми не бачимо того, що ви вводите.',
      sections: [
        {
          title: 'Хто ми',
          body: [
            'Ledger розробляє та публікує spyglee («ми»). З усіх питань щодо цієї політики або ваших даних пишіть на hello@spyglee.work.',
          ],
        },
        {
          title: 'Дані, що залишаються на пристрої',
          body: [
            'Усе, що ви вводите або створюєте в Ledger, зберігається локально на вашому пристрої, зокрема:',
            [
              'рахунки, транзакції, перекази, категорії та колекції;',
              'бюджети, заплановані й регулярні платежі;',
              'фото чеків, а також розпізнані з них продавець, дата, сума й позиції;',
              'історія цін і показники особистої інфляції;',
              'налаштування застосунку.',
            ],
            'Ці дані не надсилаються spyglee чи будь-кому іншому, і ми не маємо їхньої копії.',
          ],
        },
        {
          title: 'Сканування чеків',
          body: [
            'Коли ви фотографуєте чек або надсилаєте фото в Ledger, розпізнавання тексту відбувається на вашому пристрої. Зображення та розпізнаний текст нікуди не завантажуються для обробки.',
          ],
        },
        {
          title: 'Дозволи пристрою',
          body: [
            'Ledger запитує лише потрібні дозволи й лише тоді, коли ви користуєтеся відповідною функцією:',
            [
              'Камера — щоб фотографувати чеки, коли ви цього хочете.',
              'Фото — щоб читати лише ті фото, які ви оберете або надішлете в Ledger.',
              'Сповіщення — щоб повідомити вас, коли витрати досягнуть ліміту бюджету або настане строк запланованого платежу. Вони плануються на пристрої.',
              'Face ID, Touch ID або відбиток пальця — щоб розблоковувати Ledger, якщо ви це ввімкнете. Перевірку виконує операційна система; Ledger дізнається лише, чи була вона успішною, і ніколи не отримує ваших біометричних даних.',
            ],
            'Будь-який дозвіл можна будь-коли відкликати в налаштуваннях пристрою.',
          ],
        },
        {
          title: 'Імпорт і експорт',
          body: [
            'Під час імпорту чи експорту CSV-файлу Ledger читає або записує лише обраний вами файл. Коли ви зберігаєте чи надсилаєте експортований файл — наприклад, у хмарне сховище, електронною поштою або в інший застосунок, — цією копією опікується обраний вами сервіс відповідно до власної політики конфіденційності.',
          ],
        },
        {
          title: 'Резервні копії пристрою',
          body: [
            'Залежно від налаштувань ваш пристрій може включати дані Ledger до власних резервних копій, як-от резервна копія iCloud або резервна копія Android. Ці копії контролюєте ви та Apple або Google, а не spyglee.',
          ],
        },
        {
          title: 'Чого ми не робимо',
          body: [
            [
              'Ми не вимагаємо облікового запису чи входу.',
              'Ми не показуємо рекламу й не використовуємо рекламних трекерів.',
              'Ми не продаємо, не здаємо в оренду й не передаємо ваші дані.',
              'Ми не створюємо вашого профілю.',
            ],
          ],
        },
        {
          title: 'Магазини застосунків',
          body: [
            'Ledger поширюється через Apple App Store і Google Play. Apple і Google обробляють інформацію про завантаження та покупки, а якщо ви дозволите — також звіти про збої й статистику використання, відповідно до власних політик конфіденційності. Вони можуть надавати нам зведену анонімну статистику, наприклад кількість завантажень, яка не ідентифікує вас.',
          ],
        },
        {
          title: 'Якщо ви звертаєтеся до нас',
          body: [
            'Якщо ви напишете нам листа, ми отримаємо вашу електронну адресу й те, що ви вирішите написати. Ми використовуємо це лише для відповіді й зберігаємо лише стільки, скільки потрібно для листування. Будь ласка, не надсилайте нам своїх фінансових записів.',
          ],
        },
        {
          title: 'Ваші права',
          body: [
            'Оскільки дані Ledger залишаються на вашому пристрої, ви контролюєте їх безпосередньо: будь-коли можете переглядати, змінювати, експортувати чи видаляти їх у застосунку. Видалення застосунку прибирає його дані з пристрою, окрім резервних копій або експортованих файлів, які ви зберігаєте.',
            'Якщо ви перебуваєте в Європейській економічній зоні, Великій Британії чи іншому місці з подібним законодавством, ви маєте право на доступ до персональних даних, які ми про вас зберігаємо, їх виправлення, видалення, обмеження обробки чи заперечення проти неї, а також право подати скаргу до органу із захисту даних. В Україні такі звернення розглядає Уповноважений Верховної Ради України з прав людини. На практиці єдині персональні дані, які ми можемо мати, — це листування з вами електронною поштою.',
          ],
        },
        {
          title: 'Діти',
          body: ['Ledger не призначений для дітей віком до 16 років, і ми свідомо не збираємо інформації від них.'],
        },
        {
          title: 'Зміни цієї політики',
          body: [
            'Якщо ми змінимо цю політику, ми оновимо дату вгорі цієї сторінки. Якщо зміна суттєво впливає на поводження з вашими даними, ми також зазначимо її в застосунку або в примітках до випуску.',
          ],
        },
        {
          title: 'Контакти',
          body: ['Питання щодо конфіденційності: hello@spyglee.work.'],
        },
      ],
    },
    terms: {
      title: 'Умови використання',
      description: 'Умови, що діють, коли ви завантажуєте й використовуєте Ledger, застосунок для особистих фінансів від spyglee.',
      intro:
        'Ці умови регулюють використання Ledger, застосунку для особистих фінансів від spyglee. Завантажуючи чи використовуючи Ledger, ви погоджуєтеся з ними. Якщо ви не погоджуєтеся, будь ласка, не використовуйте застосунок.',
      sections: [
        {
          title: 'Застосунок і ліцензія',
          body: [
            'Ledger допомагає записувати доходи й витрати, встановлювати бюджети, планувати платежі, сканувати чеки та стежити за цінами на речі, які ви купуєте, — усе на вашому пристрої. Ми надаємо вам особисту, невиключну ліцензію без права передачі на використання Ledger на пристроях, якими ви володієте чи які контролюєте, відповідно до цих умов і правил магазину, з якого ви його завантажили.',
          ],
        },
        {
          title: 'Не фінансова порада',
          body: [
            'Ledger — інструмент для ведення записів. Бюджети, статистика, історія цін і показники особистої інфляції обчислюються з даних, які ви вводите, і чеків, які ви скануєте, тож вони точні настільки, наскільки точні ці дані. Ніщо в Ledger не є фінансовою, податковою, інвестиційною чи юридичною порадою. Перевіряйте важливі цифри самостійно й консультуйтеся з кваліфікованим фахівцем перед фінансовими рішеннями.',
          ],
        },
        {
          title: 'Розпізнавання чеків',
          body: [
            'Сканування чеків використовує автоматичне розпізнавання тексту й може помилково прочитати суми, дати, продавців чи позиції. Перевіряйте те, що розпізнав Ledger, перш ніж на це покладатися.',
          ],
        },
        {
          title: 'Ваші дані та резервні копії',
          body: [
            'Ваші дані зберігаються лише на вашому пристрої, і spyglee не має їхньої копії. Якщо ви загубите чи скинете пристрій або видалите застосунок, дані можуть бути втрачені, якщо у вас немає резервної копії пристрою чи експортованого CSV-файлу. Ви відповідаєте за збереження власних копій. Поводження з інформацією описано в Політиці конфіденційності.',
          ],
        },
        {
          title: 'Допустиме використання',
          body: [
            'Ви погоджуєтеся не:',
            [
              'копіювати, змінювати, поширювати, продавати чи здавати в оренду будь-яку частину Ledger;',
              'здійснювати зворотну розробку застосунку чи намагатися отримати його вихідний код, окрім випадків, дозволених законом;',
              'використовувати застосунок для будь-чого незаконного.',
            ],
          ],
        },
        {
          title: 'Покупки',
          body: [
            'Якщо Ledger пропонує платні функції чи підписки, їх купують через Apple App Store або Google Play. Оплату, поновлення, скасування й повернення коштів обробляє магазин за власними умовами. Керувати підписками чи скасовувати їх можна в налаштуваннях облікового запису магазину.',
          ],
        },
        {
          title: 'Інтелектуальна власність',
          body: [
            'Ledger, зокрема його дизайн, код, назва й логотип, належить spyglee або його ліцензіарам. Ці умови не надають вам жодних прав на них, окрім використання застосунку, як тут описано. Дані, які ви вводите, залишаються вашими.',
          ],
        },
        {
          title: 'Оновлення та доступність',
          body: [
            'Ми можемо оновлювати Ledger, щоб додавати, змінювати чи прибирати функції, виправляти проблеми або виконувати вимоги законодавства й платформ, а також можемо припинити пропонувати застосунок. Ми не обіцяємо, що Ledger завжди буде доступним, без помилок чи сумісним з кожним пристроєм.',
          ],
        },
        {
          title: 'Відмова від гарантій',
          body: [
            'Ledger надається «як є» та «як доступно». Наскільки це дозволяє закон, ми відмовляємося від усіх гарантій, явних чи неявних, зокрема придатності для певної мети й непорушення прав третіх осіб.',
          ],
        },
        {
          title: 'Обмеження відповідальності',
          body: [
            'Наскільки це дозволяє закон, spyglee не несе відповідальності за непрямі, випадкові чи побічні збитки або за втрату даних, прибутку чи заощаджень, що виникли внаслідок використання Ledger чи неможливості його використання. Ніщо в цих умовах не обмежує відповідальності, яку закон не дозволяє обмежити, і не впливає на ваші законні права як споживача.',
          ],
        },
        {
          title: 'Apple App Store',
          body: [
            'Якщо ви завантажили Ledger з App Store, ці умови укладено між вами та spyglee, а не Apple. Apple не відповідає за застосунок чи його вміст, не зобов’язана надавати обслуговування чи підтримку й не відповідає за розгляд претензій, пов’язаних із застосунком. Якщо застосунок не відповідає чинній гарантії, ви можете повідомити Apple, і Apple поверне вартість покупки, якщо вона була; інших гарантійних зобов’язань Apple не має. Apple та її дочірні компанії є третіми особами-вигодонабувачами цих умов і можуть вимагати їх виконання від вас. Використання також має відповідати Правилам використання App Store. Якщо ви завантажили Ledger з Google Play, діють також Умови використання Google Play.',
          ],
        },
        {
          title: 'Припинення',
          body: [
            'Ви можете будь-коли припинити використання Ledger, видаливши його. Якщо ви порушите ці умови, ваше право використовувати застосунок припиняється автоматично.',
          ],
        },
        {
          title: 'Зміни умов',
          body: [
            'Ми можемо оновлювати ці умови. Дата вгорі цієї сторінки вказує чинну версію. Подальше використання Ledger після змін означає, що ви приймаєте оновлені умови.',
          ],
        },
        {
          title: 'Застосовне право',
          body: [
            'Ці умови регулюються законодавством країни, в якій зареєстровано spyglee. Якщо ви споживач, за вами зберігається захист імперативних норм країни, де ви проживаєте, і ви можете звертатися з вимогами до судів за місцем свого проживання.',
          ],
        },
        {
          title: 'Контакти',
          body: ['Питання щодо цих умов: hello@spyglee.work.'],
        },
      ],
    },
  },
};
