import streamlit as st
from pathlib import Path

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

# YENİ NESİL KOMUT: st.components.v1.iframe yerine st.iframe kullanıyoruz.
# Path objesi ile statik HTML dosyasının tam yolunu belirtiyoruz.
html_file_path = Path(__file__).parent / "static" / "index.html"
st.iframe(html_file_path, height=1000, scrolling=True)
