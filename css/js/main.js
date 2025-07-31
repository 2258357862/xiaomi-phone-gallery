document.addEventListener('DOMContentLoaded', function() {
    renderPhones();

    // 搜索功能
    document.getElementById('searchInput').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const allPhoneCards = document.querySelectorAll('.phone-card-container');
        
        allPhoneCards.forEach(card => {
            const phoneName = card.querySelector('.phone-title').textContent.toLowerCase();
            if (phoneName.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
        
        // 隐藏空的系列标题
        document.querySelectorAll('.series-section').forEach(section => {
            const visibleCards = section.querySelectorAll('.phone-card-container[style=""]').length;
            section.style.display = visibleCards > 0 ? '' : 'none';
        });
    });
});

function renderPhones() {
    const seriesContainer = document.querySelector('.series-container');
    seriesContainer.innerHTML = '';
    
    // 按系列分组手机
    const phonesBySeries = {};
    
    phones.forEach(phone => {
        if (!phonesBySeries[phone.series]) {
            phonesBySeries[phone.series] = [];
        }
        phonesBySeries[phone.series].push(phone);
    });
    
    // 渲染每个系列
    for (const [series, seriesPhones] of Object.entries(phonesBySeries)) {
        const seriesSection = document.createElement('div');
        seriesSection.className = 'series-section mb-5';
        
        const seriesTitle = document.createElement('h2');
        seriesTitle.className = 'series-title';
        seriesTitle.textContent = series;
        seriesSection.appendChild(seriesTitle);
        
        const phonesRow = document.createElement('div');
        phonesRow.className = 'row';
        
        seriesPhones.forEach(phone => {
            const phoneCard = createPhoneCard(phone);
            phonesRow.appendChild(phoneCard);
        });
        
        seriesSection.appendChild(phonesRow);
        seriesContainer.appendChild(seriesSection);
    }
}

function createPhoneCard(phone) {
    const cardCol = document.createElement('div');
    cardCol.className = 'col-6 col-md-4 col-lg-3 mb-4 phone-card-container';
    
    const card = document.createElement('div');
    card.className = 'phone-card shadow-sm';
    card.onclick = function() {
        window.location.href = `detail.html?id=${phone.id}`;
    };
    
    // 图片容器
    const imageContainer = document.createElement('div');
    imageContainer.className = 'phone-image-container';
    
    const image = document.createElement('img');
    image.className = 'phone-image';
    image.src = phone.imageUrl;
    image.alt = phone.name;
    image.loading = 'lazy';
    
    imageContainer.appendChild(image);
    
    // 信息容器
    const infoContainer = document.createElement('div');
    infoContainer.className = 'phone-info';
    
    const title = document.createElement('h3');
    title.className = 'phone-title';
    title.textContent = phone.name;
    
    infoContainer.appendChild(title);
    
    card.appendChild(imageContainer);
    card.appendChild(infoContainer);
    cardCol.appendChild(card);
    
    return cardCol;
}
