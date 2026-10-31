import streamlit as st

# Sayfayı tam ekran genişliğinde başlat
st.set_page_config(page_title="Mehmet Eren Çalışma Masası", layout="wide", initial_sidebar_state="collapsed")

# Streamlit varsayılan kenar boşluklarını tamamen sıfırlayan CSS
st.markdown("""
    <style>
        .block-container { padding: 0rem !important; }
        iframe { width: 100% !important; height: 100vh !important; border: none !important; }
        #MainMenu, footer, header { visibility: hidden; }
    </style>
""", unsafe_allow_html=True)

# Sunucunun config.toml dosyasındaki enableStaticServing özelliğiyle bağlanan nihai statik yönlendirme
st.components.v1.iframe(src="/static/index.html", height=1000, scrolling=True)
