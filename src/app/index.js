import { Link, Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Este arquivo é a rota "/" — a tela que abre primeiro.
// O nome index é o único com significado especial: index.js de uma pasta é a
// tela daquela pasta.
export default function Inicio() {
  return (
    // edges={["bottom"]}: o cabeçalho já resolveu o topo, sobra a barra de
    // gestos embaixo. Com "bottom" na lista, o topo fica de fora — a
    // SafeAreaView NÃO põe nada lá. O paddingTop do estilo é espaçamento
    // nosso, não área segura: tire e o avatar cola no cabeçalho.
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      {/* Cada tela pode mexer no próprio cabeçalho */}
      <Stack.Screen options={{ title: "Painel" }} />

      {/* O cabeçalho fica FIXO no topo (fora da ScrollView) */}
      <View style={styles.cabecalho}>
        <View style={styles.avatar} />
        <View>
          <Text style={styles.saudacao}>Olá, Estudante</Text>
          <Text style={styles.subtitulo}>Bem-vindo de volta</Text>
        </View>
      </View>

      {/* A ScrollView envolve apenas a lista de cartões que precisam rolar */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listaContainer}
      >
        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>Contador</Text>
          <Text style={styles.detalhe}>Hooks aula 18/09...</Text>
          {/* href é o caminho do arquivo: notas.js vira "/notas" */}
          <Link href="/contador" style={styles.link}>
            Abrir contador →
          </Link>
        </View>

        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>Spotify</Text>
          <Text style={styles.detalhe}>Atividade complementar.</Text>
          <Link href="/spotify" style={styles.link}>
            Abrir atividade →
          </Link>
        </View>

        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>Aula01.</Text>
          <Text style={styles.detalhe}>
            Abrir aula01
          </Text>
          <Link href="/aula01" style={styles.link}>
            Abrir →
          </Link>
        </View>

        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>lista de musicas.</Text>
          <Text style={styles.detalhe}>
            Abrir lista
          </Text>
          <Link href="/listademusicas" style={styles.link}>
            Abrir →
          </Link>
        </View>

        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>Bordel</Text>
          <Text style={styles.detalhe}>
            Abrir lista bordel
          </Text>
          <Link href="/bordel" style={styles.link}>
            Abrir →
          </Link>
        </View>

     

        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>cep</Text>
          <Text style={styles.detalhe}>
            Abrir lista cep
          </Text>
          <Link href="/cep" style={styles.link}>
            Abrir →
          </Link>
        </View>

        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>Cnpj</Text>
          <Text style={styles.detalhe}>
            Abrir lista cnpj
          </Text>
          <Link href="/cnpj" style={styles.link}>
            Abrir →
          </Link>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 20,
  },

  
  listaContainer: {
    paddingBottom: 24, 
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#D9DDE3",
  },

  saudacao: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
  },

  subtitulo: {
    fontSize: 14,
    color: "silver",
    marginTop: 2,
  },

  cartao: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    gap: 6,
  },

  cartaoTitulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  detalhe: {
    fontSize: 14,
    color: "#374151",
  },

  link: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2354D6",
    marginTop: 4,
  },
});
