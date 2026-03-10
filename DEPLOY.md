# 🚀 Deploy Instructions

## ✅ Что готово:

- [x] v2.0 redesign закоммичен в ветку `v2.0-redesign`
- [x] Все файлы готовы к деплою
- [x] Cygre шрифты в `public/fonts/`
- [x] Get Started кнопка с оригинальным градиентом
- [x] Falling pattern анимация

## 📤 GitHub Push

**Команда для запуска:**

```bash
cd /root/.openclaw/workspace/relicona-redesign
git push origin v2.0-redesign
```

**Если нужна авторизация GitHub:**

1. Создай Personal Access Token: https://github.com/settings/tokens
2. Используй его как пароль при push

**Или настрой SSH:**

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
# Добавь ключ в GitHub → Settings → SSH Keys
```

## 🔀 Merge в main (после проверки)

```bash
git checkout main
git merge v2.0-redesign
git push origin main
```

## 🚀 Vercel Deploy

### Метод 1: Через Vercel Dashboard

1. Открой: https://vercel.com/dashboard
2. Найди проект: **websiteRelicona**
3. Settings → Git → **Deploy Branch**: `v2.0-redesign`
4. Нажми **Deploy**

### Метод 2: Vercel CLI

```bash
npm i -g vercel
cd /root/.openclaw/workspace/relicona-redesign
vercel --prod
```

## ⚙️ Environment Variables (если нужны)

В Vercel Dashboard → Settings → Environment Variables:

- Пока не требуются

## ✅ После деплоя проверь:

- [ ] Шрифт Cygre загружается
- [ ] Get Started кнопка с градиентом работает
- [ ] Falling pattern анимация видна
- [ ] Mobile responsive
- [ ] Все секции отображаются

## 🔄 Rollback (если нужен)

```bash
# Вернуться к старой версии
git checkout main
vercel deploy
```

---

**Текущий статус:**
- ✅ Код готов
- ⏳ Push на GitHub (нужна авторизация)
- ⏳ Deploy на Vercel (после push)

**Репозиторий:** https://github.com/jerrybord/websiteRelicona
**Ветка:** `v2.0-redesign`
