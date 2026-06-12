// 춘천 여행지 추천 애플리케이션 로직

const DATASET = [
    {"name": "강원특별자치도립화목원", "keywords": ["자연"], "desc": "다양한 희귀 식물과 테마 정원이 조성되어 있어 산책하며 자연을 느끼기 좋은 화목원"},
    {"name": "구곡폭포", "keywords": ["자연"], "desc": "아홉 굽이를 돌아 떨어지는 시원한 폭포수와 싱그러운 숲길이 매력적인 천연 자연 명소"},
    {"name": "제이드가든", "keywords": ["자연", "힐링"], "desc": "'숲속의 작은 유럽'을 콘셉트로 한 이국적인 정원에서 조용히 휴식을 취하는 수목원"},
    {"name": "소양강댐", "keywords": ["자연"], "desc": "동양 최대의 사사담으로 주변의 웅장한 산세와 탁 트인 호수 경관이 일품인 곳"},
    {"name": "춘천숲자연휴양림", "keywords": ["자연", "힐링"], "desc": "울창한 자작나무 숲과 계곡 사이에서 글램핑과 산림욕을 즐기며 온전한 휴식을 취하는 곳"},
    {"name": "해피초원목장", "keywords": ["힐링", "체험", "자연"], "desc": "귀여운 동물들에게 먹이를 주고, 한국의 스위스라 불리는 의암호 포토존에서 힐링하는 목장"},
    {"name": "남이섬", "keywords": ["자연", "체험"], "desc": "메타세쿼이아 길을 걸으며 자연을 만끽하고 자전거, 짚와이어 등 다양한 액티비티를 즐기는 섬"},
    {"name": "김유정문학촌", "keywords": ["관광지"], "desc": "소설가 김유정의 생가와 문학비가 보존된 곳으로, 그의 삶과 문학 세계를 기리는 문화 공간"},
    {"name": "강촌레일바이크", "keywords": ["힐링", "체험", "자연"], "desc": "아름다운 풍경과 철길에서 자연과 함께하는 힐링 레일바이크"},
    {"name": "삼악산 호수케이블카", "keywords": ["관광지", "체험"], "desc": "의암호 상공을 가로질러 삼악산까지 이어지는 국내 최장 길이의 탁 트인 케이블카 체험"},
    {"name": "레고랜드", "keywords": ["체험"], "desc": "화려한 레고 브릭으로 꾸며진 테마파크에서 다양한 놀이기구와 어트랙션을 즐기는 공간"},
    {"name": "애니메이션 박물관", "keywords": ["관광지"], "desc": "국내 유일의 애니메이션 전문 박물관으로 고전 만화부터 최신 애니메이션까지 한눈에 보는 곳"},
    {"name": "국립춘천박물관", "keywords": ["관광지"], "desc": "강원지역의 역사 유물 관람은 물론, 초대형 실감 미디어아트 영상까지 함께 즐기는 복합 문화 공간"},
    {"name": "막국수체험박물관", "keywords": ["관광지"], "desc": "춘천 명물 막국수의 역사와 유래를 배우고 명품 맷돌로 메밀 반죽을 직접 만들어 보는 박물관"},
    {"name": "강촌테마랜드", "keywords": ["체험"], "desc": "강촌의 자연을 배경으로 스릴 넘치는 ATV(사륜바이크)와 카트 레이싱을 즐길 수 있는 레저 시설"},
    {"name": "산토리니", "keywords": ["감성카페"], "desc": "구봉산 자락에 위치해 이국적인 소망의 탑 구조물과 아름다운 일몰을 감상할 수 있는 명소"},
    {"name": "올데이스테이", "keywords": ["감성카페"], "desc": "거대한 규모와 감각적인 인테리어, 대형 크리스마스트리 등 화려한 포토존으로 유명한 핫플레이스"},
    {"name": "그린보드", "keywords": ["감성카페", "자연"], "desc": "내부에 징검다리와 연못이 있을 정도로 울창한 식물들이 가득해 숲속에 온 듯한 싱그러운 대형 카페"},
    {"name": "감자밭", "keywords": ["감성카페"], "desc": "춘천의 대표 명물이 된 쫀득한 '감자빵'의 원조이자, 야외 정원이 아기자기하게 꾸며진 곳"},
    {"name": "소양강 스카이워크", "keywords": ["관광지", "체험"], "desc": "투명한 유리 바닥 위를 걸으며 소양강의 스릴을 만끽하는 명소"},
    {"name": "구봉산 전망대 카페거리", "keywords": ["감성카페", "관광지"], "desc": "춘천 시내를 한눈에 내려다보며 커피를 즐길 수 있는 대표 카페 거리"},
    {"name": "공지천 유원지", "keywords": ["자연", "힐링"], "desc": "의암호 호숫가를 따라 산책로와 자전거 도로가 잘 조성된 시민들의 쉼터"},
    {"name": "청평사", "keywords": ["힐링", "자연", "관광지"], "desc": "소양호에서 배를 타고 들어가 만나는 고즈넉하고 역사 깊은 사찰"},
    {"name": "등선폭포", "keywords": ["자연", "관광지"], "desc": "삼악산 등반 초입에 위치한 기암괴석과 신비로운 협곡 사이의 폭포"},
    {"name": "구곡폭포2", "keywords": ["자연", "관광지"], "desc": "아홉 굽이를 돌아 떨어지는 웅장한 폭포와 시원한 산책로"},
    {"name": "이상원 미술관", "keywords": ["힐링", "관광지"], "desc": "화악산 계곡 깊은 곳에 위치해 자연과 예술을 동시에 즐기는 숲속 미술관"},
    {"name": "육림고개", "keywords": ["관광지", "맛집"], "desc": "청년 상인들의 감각적인 공방과 개성 있는 맛집이 모여 있는 레트로 골목"},
    {"name": "책과인쇄박물관", "keywords": ["체험", "관광지"], "desc": "활판 인쇄의 역사와 전통 활자 인쇄를 직접 체험해 볼 수 있는 이색 박물관"},
    {"name": "문배마을", "keywords": ["맛집", "자연"], "desc": "구곡폭포 정상 근처에 위치한 산채비빔밥และ 토종닭 요리가 유명한 산골 마을"},
    {"name": "소울로스터리", "keywords": ["감성카페", "힐링"], "desc": "울창한 소나무 숲속에서 소금라떼와 크로플을 즐길 수 있는 대형 야외 카페"},
    {"name": "크로프트 커피", "keywords": ["감성카페"], "desc": "주택가 골목길에 숨겨진 빈티지하고 아늑한 한옥 인테리어의 에스프레소 바"},
    {"name": "유기농카페", "keywords": ["감성카페", "자연"], "desc": "계절마다 핑크뮬리, 메리골드 등 아름다운 꽃밭이 펼쳐지는 정원 카페"},
    {"name": "원조숯불닭불고기집", "keywords": ["맛집"], "desc": "춘천 명동에서 수십 년간 블루리본을 받아온 노포 숯불 닭갈비 맛집"},
    {"name": "통나무집닭갈비", "keywords": ["맛집"], "desc": "신북읍 닭갈비 거리에 위치한 깊은 양념 맛과 푸짐함이 특징인 철판 닭갈비 맛집"},
    {"name": "유포리막국수", "keywords": ["맛집"], "desc": "삼삼하고 시원한 동치미 국물을 직접 부어 먹는 50년 전통의 막국수 노포"},
    {"name": "샘밭막국수", "keywords": ["맛집"], "desc": "메밀 고유의 향을 살린 부드러운 면발과 비법 양념장이 조화로운 3대 전통 맛집"},
    {"name": "육림닭강정", "keywords": ["맛집"], "desc": "육림고개에 위치한 식어도 바삭하고 중독성 있는 달콤매콤한 조청 닭강정 전문점"},
    {"name": "대원당", "keywords": ["맛집"], "desc": "1968년부터 이어져 온 춘천의 가장 오래된 빵집"},
    {"name": "본가호반닭갈비막국수", "keywords": ["맛집"], "desc": "거두리 현지인 철판 닭갈비 맛집"},
    {"name": "춘천 중도물레길", "keywords": ["체험", "자연"], "desc": "카누를 타고 의암호의 고요한 물길을 따라 자연을 유람하는 이색 액티비티"},
    {"name": "소양강 처녀동상", "keywords": ["관광지"], "desc": "국민 애창곡 '소양강 처녀'를 기념하여 소양강변에 세워진 7m 높이의 웅장한 동상"},
    {"name": "JOC 젤라또", "keywords": ["맛집"], "desc": "사장님이 본고장 이탈리아에서 직접 배운 솜씨로 정성을 들여 만드는 수제 젤라또 전문점"},
    {"name": "1.5닭갈비", "keywords": ["맛집"], "desc": "후평동에 위치한 곳으로, 카레 향이 살짝 감도는 중독성 있는 양념과 푸짐한 양으로 늘 웨이팅이 있는 철판 닭갈비 집"},
    {"name": "부귀리벚꽃길", "keywords": ["자연", "힐링"], "desc": "드라이브하기 좋은 춘천 벚꽃 명소"},
    {"name": "김유정역 폐역", "keywords": ["힐링", "관광지"], "desc": "한국철도 최초로 역명에 사람 이름을 사용한 역, 다양한 포토존"},
    {"name": "춘천향교", "keywords": ["관광지"], "desc": "조선 초기에 창설된 교육기관, 역사를 품은 관광지"},
    {"name": "신장절공묘역", "keywords": ["관광지"], "desc": "고려 개국공신 신숭겸 장군의 충절을 기리는 묘역"},
    {"name": "원평 팜스테이", "keywords": ["자연", "체험", "힐링"], "desc": "다양한 체험행사와 계절별 체험으로 어느 계절에 방문해도 자연 속에서 힐링할 수 있는 이색 농촌체험"},
    {"name": "엘리시안 강촌", "keywords": ["힐링", "체험"], "desc": "스키장, 골프장, 콘도 등을 결합한 사계절 종합 리조트 단지"},
    {"name": "박사마을", "keywords": ["관광지"], "desc": "우리나라에서 단위 인구 당 박사가 가장 많이 나와 '박사마을'이라 불리는 이색 마을"},
    {"name": "춘천 근화동 당간지주", "keywords": ["관광지"], "desc": "보물로 지정된 고려시대의 당간지주"},
    {"name": "인필드", "keywords": ["감성카페"], "desc": "손흥민 팬들의 성지인 춘천의 대형 카페"},
    {"name": "킹카누 나루터", "keywords": ["체험"], "desc": "국내 유일의 캐나디안 카누 체험"},
    {"name": "추곡 약수터", "keywords": ["자연"], "desc": "김원보라는 사람이 꿈에 사명산 산신령의 계시를 받고 약수를 발견했다는 전설이 전해오는 약수터"}
];

// 중복된 이름 보정 (구곡폭포2 -> 구곡폭포)
DATASET.forEach(item => {
    if (item.name === "구곡폭포2") {
        item.name = "구곡폭포";
    }
});

// 전역 추천 리스트 상태 관리 변수
let recommendedList = [];
let currentIndex = 0;

// DOM 요소 캐싱
const recommendBtn = document.getElementById("recommendBtn");
const retryBtn = document.getElementById("retryBtn");
const resultCard = document.getElementById("resultCard");
const resName = document.getElementById("resName");
const resTag = document.getElementById("resTag");
const resDesc = document.getElementById("resDesc");

// 1. 추천 알고리즘 및 정렬 실행 함수
function calculateRecommendations() {
    // 선택된 체크박스 값 가져오기
    const checkboxes = document.querySelectorAll(".keyword-checkbox:checked");
    const selectedKeywords = Array.from(checkboxes).map(cb => cb.value.replace(/\s+/g, "")); // 공백 제거

    // 예외 처리: 아무것도 선택하지 않았을 때
    if (selectedKeywords.length === 0) {
        alert("최소 1개 이상의 키워드를 선택해주세요.");
        return;
    }

    // 여행지별 일치 점수 계산
    const matchedDestinations = [];
    DATASET.forEach(dest => {
        // 데이터셋 키워드 공백 정규화
        const normalizedDestKeywords = dest.keywords.map(kw => kw.replace(/\s+/g, ""));
        
        let score = 0;
        normalizedDestKeywords.forEach(kw => {
            if (selectedKeywords.includes(kw)) {
                score += 1;
            }
        });

        // 1점 이상인 곳만 필터링
        if (score > 0) {
            matchedDestinations.push({
                name: dest.name,
                keywords: dest.keywords,
                desc: dest.desc,
                score: score
            });
        }
    });

    // 만약을 대비해 매칭 결과가 없을 경우
    if (matchedDestinations.length === 0) {
        alert("선택하신 키워드에 해당하는 여행지가 없습니다.");
        return;
    }

    // 정렬 로직 적용
    // 1순위: score가 높은 순 (descending)
    // 2순위: name이 가나다순 (ascending)
    matchedDestinations.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score; // 점수 높은 순
        }
        return a.name.localeCompare(b.name, "ko"); // 가나다순
    });

    // 상태 동기화 및 카드 활성화
    recommendedList = matchedDestinations;
    currentIndex = 0;

    resultCard.classList.remove("hidden");
    retryBtn.classList.remove("hidden");

    // 첫 번째 추천 노출
    showRecommendation();
}

// 2. 카드 뷰에 추천 여행지 표시 함수
function showRecommendation() {
    if (currentIndex < recommendedList.length) {
        const item = recommendedList[currentIndex];
        resName.textContent = item.name;
        resTag.textContent = `태그: ${item.keywords.join(", ")} (일치 점수: ${item.score}점)`;
        resDesc.textContent = item.desc;
        
        currentIndex += 1;
    } else {
        // 모든 여행지 소진 시 알림 및 다시 추천 버튼 감춤
        alert("추천 가능한 여행지를 모두 확인했습니다.");
        retryBtn.classList.add("hidden");
    }
}

// 이벤트 리스너 바인딩
recommendBtn.addEventListener("click", calculateRecommendations);
retryBtn.addEventListener("click", showRecommendation);
